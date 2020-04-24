import React, { Component } from 'react'
import { Container, CssBaseline, Typography } from '@material-ui/core';

function SearchForm(props) {
    return (
      <form style={formStyle}>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            style={inputStyle}
            onChange={props.handleChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Book"
            id="search"
          /><br />
          <button style={btnStyle} onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    );
  }

export default SearchForm

const formStyle = {
  marginTop: '50px',
  width: '100%'
}
const inputStyle = {
  width: '30%',
  height: '50px',
  borderRadius: '2%'
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  height: '35px'
  // float: 'right'
}