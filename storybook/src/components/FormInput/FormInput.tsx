import React from "react";
import './FormInput.css'

const FormInput = (props: any) => {
    const {size = 'medium', ...rest} = props; 
    return (
        <input className={`input ${size}`} {...rest} />
    )
}

export default FormInput;
