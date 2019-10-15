
import React from 'react'

function InputField(props){

    return(
        <div className="form-group mx-sm-3 mb-2">
        <label for={props.id}>{props.label}</label>
        <input type={props.type} className={props.className} id={props.id} placeholder={props.label}/>
        
        </div>
    );
};

export default InputField;