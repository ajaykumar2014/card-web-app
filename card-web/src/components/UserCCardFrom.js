import React,{Component} from 'react'
import { connect } from 'react-redux'
import {TextField,Button} from './index'
import  { addNewCardDetails }  from '../actions/index'
import axios from 'axios';
import uuid from 'uuid'

const config = require('../config')

class UserCCardFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCardInfo:{
                id:uuid.v1(),
                name:'',
                cnumber:null,
                climit:null
            },
            errorMessage:undefined
        }
    }

    newCardInfoSubmit = (e) => {
        e.preventDefault()
        this.fieldValidation();
        console.log("Console ====" + this.state.newCardInfo.id)
        this.saveNewCardDetails();
    }

    fieldValidation = () =>{
        const {name,cnumber,climit} = this.state.newCardInfo;
        if(name === undefined || name.length === 0 ){
            alert('Card Holder Name can\'t be empty.');
        }
        if(cnumber === 0 || cnumber === null ){
            alert('Card Number can\'t be empty.'); 
        }

        if(climit === 0 || climit === null ){
            alert('Card Limit can\'t be zero.'); 
        }
    }

    saveNewCardDetails = async () =>{
       await axios.post(config.SAVE_CARD_DETAIL_URL, this.state.newCardInfo)
          .then(res=>{
              if(res.data.status==='success' && res.data.code=== 200 ){
                this.setState({
                    errorMessage : undefined
                });
                this.props.updateStore(this.state.newCardInfo);
              }else{
                  this.setState({
                      errorMessage : res.data.message
                  })
              }
          })
          .catch(error=> {
            console.log(error);
          });
    }

    updateError = (error) =>this.setState({errorMessage : error});

    cardHolderNameHandler = (e) => {
        let cardHolderName = e.target.value;

        this.setState({
            newCardInfo: { ...this.state.newCardInfo, name: cardHolderName }
        })

    }

    cardNumberHandler = (e) => {
        let cardNumber = e.target.value;
        if(cardNumber.length > 19){
            alert('Card Number length is invalid.')
        }
        this.setState({
            newCardInfo: { ...this.state.newCardInfo, cnumber: cardNumber }
        })
    }

    cardLimitHandler = (e) => {
        let cardlimit = e.target.value;
        this.setState({
            newCardInfo: { ...this.state.newCardInfo, climit: cardlimit }
        })
    }

    render() {
        console.log("Error message is "+this.state.errorMessage)
        return (
            <div className="App-box" style={{width:'50%'}}>
                {this.state.errorMessage && <span className="error-message">{this.state.errorMessage}</span>}
                <form onSubmit={(e) => { this.newCardInfoSubmit(e) }}>
                    <TextField type="text" className="form-control" id="name" label="Name" isRequired={true} handleChange={e => this.cardHolderNameHandler(e)}></TextField>
                    <TextField type="number" className="form-control" id="cnumber" label="Card Number" isRequired={true} handleChange={e => this.cardNumberHandler(e)}></TextField>
                    <TextField type="number" className="form-control" id="climit" label="Card Limit" isRequired={true} handleChange={e => this.cardLimitHandler(e)}></TextField>
                    <Button type="submit" className="btn btn-primary" label="Add"></Button>
                </form>
            </div>
        );
    }
};


const mapDispatchToProps = dispatch => {
    return {
        updateStore: newCardInfo => {
            dispatch(addNewCardDetails(newCardInfo));
        }
    };
};

export default connect(null, mapDispatchToProps)(UserCCardFrom);
