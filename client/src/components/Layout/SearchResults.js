import React, { Component } from 'react'
import { Container, CssBaseline, Typography } from '@material-ui/core';

function SearchResults(props) {
    return (
      <ul className="list-group">
        {props.results.map(result => (
          <li className="list-group-item" key={result.id}>
            <img alt={result.title} className="img-fluid" src={result.images.original.url} />
          </li>
        ))}
      </ul>
    );
  }

export default SearchResults
