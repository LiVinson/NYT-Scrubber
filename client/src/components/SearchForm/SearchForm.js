import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label>Topic</label>
      <input
        name="topic"
        type="text"
        onChange={props.handleInputChange}
        value={props.search}
        className="form-control"
        placeholder="Examples: Florida, ..."
      />
      <label>Start Year</label>
      <input
        name="startYear"
        type="text"
        onChange={props.handleInputChange}
        value={props.startYear}
        className="form-control"
        placeholder="2016"
      />
      <label>End Year</label>
      <input
        name="endYear"
        type="text"
        onChange={props.handleInputChange}
        value={props.startYear}
        className="form-control"
        placeholder="2018"
      />
    </div>

    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
      Search
      </button>


  </form>
);

export default SearchForm;
