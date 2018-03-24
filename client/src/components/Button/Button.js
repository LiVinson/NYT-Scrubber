import React from "react";
import "./Button.css";

const Button = props => {
    return (
    <button type="button" className=" saveBtn btn btn-info" {...props}>
        {props.children}
    </button>
)};

export default Button;