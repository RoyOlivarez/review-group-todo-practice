import React from 'react';
 
let InputComponent = (props) => {
    return (
        <div>
            <input 
                value={props.text} 
                onChange={props.handleChange}>
            </input>
            <button 
                onClick={props.clicked}>
                Submit
            </button>
        </div>
    )
};


export default InputComponent;