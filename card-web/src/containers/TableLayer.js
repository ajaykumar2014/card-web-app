
import React, { Component } from 'react'
import Table from "../components/Table";
import { connect } from 'react-redux'
import { refreshCardInfo } from '../actions/index'
const config = require('../config')

class TableLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfoDetails: [],
            isLoading: true
        };
        //this.fetchUserCardDetails = this.fetchUserCardDetails.bind(this);
    }
    fetchUserCardDetails() {
        console.log("FETch card url "+config.FETCH_CARD_DETAIL_URL);
        fetch(config.FETCH_CARD_DETAIL_URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }).then(response => {
            if (response.ok) {
                response.json().then(res => {
                    console.log(res)
                    this.setState({ cardInfoDetails: res, isLoading: false })
                    this.props.refreshCardInfoDetails(this.state.cardInfoDetails);
                })
            }
        }).catch(e=>{
            this.setState({ isLoading: false }) 
        });
    }
    componentWillMount() {
        this.fetchUserCardDetails();
    }


    render() {
        let { cardInfoDetails } = this.props
        console.log("card details is " + cardInfoDetails)
        if (cardInfoDetails) {
            return (
                <div>
                    {this.state.isLoading && <i className="fa fa-spinner fa-spin">Loading...</i>}
                    {!this.state.isLoading && <Table dataSet={cardInfoDetails}></Table>}
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        refreshCardInfoDetails: cardInfoDetails => {
            dispatch(refreshCardInfo(cardInfoDetails));
        }
    };
};
const mapStateToProps = state => {
    return {
        cardInfoDetails: state.cardDetailsReducer.cardInfoDetails
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableLayer);
