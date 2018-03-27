import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = (props) => {
    return (
        <div className="button-group-Div" role="group">
            {props.children}
        </div>
    )
};

export default ButtonGroup;