import React from "react";
import "./ListDiv.css";

const ListDiv = (props) => (
    <div className = "listDiv">
        <h4>{props.headline}</h4>
        <p>{props.byline}</p>
        <p>{props.snippet}</p>
        <p><b>"Read the full Article: "</b>{props.url}</p>
    </div>

);

export default ListDiv;