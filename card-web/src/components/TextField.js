
import React from 'react'

function TextField(props){

    return(
        <div className="form-group mx-sm-3 mb-2">
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} className={props.className} id={props.id} placeholder={props.label} onChange={props.handleChange} required={props.isRequired}/>
        </div>
    );
};

export default TextField;