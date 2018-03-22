import React from "react";
import "./Button.css";

const Button = props => {
    return (
    <button type="button" className=" saveBtn btn btn-info" id={props.id} onClick={props.handleArticleSave}>
        {props.children}
    </button>
)};

export default Button;