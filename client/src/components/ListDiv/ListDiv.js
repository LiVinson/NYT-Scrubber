import React from "react";
import "./ListDiv.css";

const ListDiv = (props) =>

  (

    <div className = "listDiv">
        <h4 className="article-header">{props.headline}</h4>
        <p className="article-byline">{props.byline}</p>
        <p className="article-snippet">{props.snippet}</p>
        <p className="article-url"><a href={props.url} target="_blank"><b>"View the full Article: "</b></a></p>
    </div>

);

export default ListDiv;