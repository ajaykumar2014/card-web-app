
import React from 'react'

function Button(props) {
    return (
        <div>
            <input className={props.className} type={props.type} value={props.label} />
        </div>
    );
};

export default Button;