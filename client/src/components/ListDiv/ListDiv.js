import React from "react";
import "./ListDiv.css";

const ListDiv = (props) => {
    // console.log("date as is:", props.pub_date);
    console.log(typeof props.pub_date);
    
    const formattedDate = new Date(props.pub_date)
    const month = (formattedDate.getMonth());
    const date = formattedDate.getDate();
    const year = formattedDate.getFullYear();
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


    // console.log("date after new Date", formattedDate.getMonth());
    // console.log(typeof formattedDate);
  return (

    <div className = "listDiv">
        <h4 className="article-header">{props.headline}</h4>
        <p className="article-byline">{props.byline}</p>
        <p className="article-date">Published: {monthNames[month]} {date}, {year}</p>
        <p className="article-snippet"><b>Snippet:</b> {props.snippet}</p>
    </div>

);


}



export default ListDiv;