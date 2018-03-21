import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
    <form className="search">
  <div className="form-group">
  <label>Topic</label>
  <input 
    name="topic"
    type="text"
    className="form-control"
    placeholder="Examples: Florida, ..."
    />
  <label>Start Year</label>
  <input 
    name="startYear"
    type="text"
    className="form-control"
    placeholder="2016"
    />
      <label>End Year</label>
  <input 
    name="endYear"
    type="text"
    className="form-control"
    placeholder="2018"
    />
  </div>
  </form>
);

export default SearchForm;
