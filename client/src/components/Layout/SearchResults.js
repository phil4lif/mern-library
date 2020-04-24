import React, { Component } from 'react'
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import SaveBtn from './SaveBtn';

function SearchResults(props) {
  return (
    <React.Fragment>

      <div style={resultsContainer}><div>Showing Results For: {props.query} </div>
        <ul>
          {props.results.map(result => (
            <li className="list-group-item" key={result.id} style={listStyle}>
              <h3>{result.volumeInfo.title}</h3>
              <h3>-{result.volumeInfo.authors}</h3>
              <img alt={result.volumeInfo.title} src={result.volumeInfo.imageLinks.thumbnail} />
              <p>Description: {result.volumeInfo.description}</p>
              <a target="_blank" href={result.volumeInfo.infoLink}>infoLink</a>
              <SaveBtn saveBook={props.saveBook} result={result} />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default SearchResults

const listStyle = {
  background: 'grey',
  listStyle: 'none',
  maxWidth: '90%'
}
const resultsContainer = {
  marginTop: '100px',
  marginLeft: '25%',
  maxWidth: '50%',
  border: '2px solid black',
  padding: '15px'
}