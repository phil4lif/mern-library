import React, { Component } from 'react'
import { Container, CssBaseline, Typography } from '@material-ui/core';

function SearchResults(props) {
    return (
      <ul>
        {props.results.map(result => (
          <li className="list-group-item" key={result.id}>
            <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail} />
          </li>
        ))}
      </ul>
    );
  }

export default SearchResults
