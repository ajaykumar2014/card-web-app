import React,{Component} from 'react'
import {InputField,Button} from '../components/index'

class CardFormPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form>
                    <InputField type="text" className="form-control" id="name" label="Name"></InputField>
                    <InputField type="number" className="form-control" id="cnumber" label="Card Number"></InputField>
                    <InputField type="number" className="form-control" id="climit" label="Card Limit"></InputField>
                    <Button type="button" className="btn btn-primary" label="Add"></Button>
                </form>
            </div>
        );
    }
};

export default CardFormPanel;