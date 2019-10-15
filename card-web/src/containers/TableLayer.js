import Table from "../components/Table";
import React, { Component } from 'react'
class TableLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardDetails: []
        }
        //this.fetchUserCardDetails = this.fetchUserCardDetails.bind(this);
    }
    fetchUserCardDetails() {
        console.log("one")
        fetch('http://localhost:7777/card/fetch', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }).then(response => {
            if (response.ok) {
                response.json().then(res => {
                    console.log(res)
                    this.setState({cardDetails: res })
                })
            }
        }
        )
    }
    componentWillMount() {
        this.fetchUserCardDetails();
    }


    render() {
        let cardDetails  = this.state.cardDetails;
        console.log("card details is "+ cardDetails)
        if (cardDetails) {
            return (
                <div>
                    <Table dataSet={cardDetails}></Table>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default TableLayer;