import React, { Component } from 'react'
import API from '../../utils/API'

export class Saved extends Component {
    state = {
        savedBooks: []
    }
    componentDidMount() {
        this.loadBooks()
    }
    loadBooks = () => {
        console.log("loading saved books")
        API.getBooks()
            .then(res => {
                // console.log(res.data)
                this.setState({ savedBooks: res.data })
                // console.log(this.state.savedBooks)
            })
            .catch(err => console.log(err));
    };

    delBook = id => {
        // console.log(id)
        API.delBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                <div style={resultsContainer}>
                    <ul>
                        {this.state.savedBooks.map(result => (
                            <li className="list-group-item" style={listStyle} key={result._id}>
                                <h3>{result.title}</h3>
                                <h3>-{result.author}</h3>
                                <img alt={result.title} className="img-fluid" src={result.image} />
                                <p>Description: {result.synopsis}</p>
                                <a target="_blank" href={result.link}><button style={btnStyle}>Info Link</button></a>
                                <br />
                                <br />
                                <button result={result} style={btnStyle} onClick={() => this.delBook(result._id)} dataid={result._id}>Delete book</button>
                                <br />
                            </li>))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Saved

const listStyle = {
    background: 'grey',
    listStyle: 'none',
    maxWidth: '90%',
    backgroundColor: 'rgba(190, 125, 2, 0.71)'
}
const resultsContainer = {
    marginTop: '100px',
    marginLeft: '25%',
    maxWidth: '50%',
    // border: '2px solid black',
    padding: '15px',
    // backgroundColor: 'rgba(190, 125, 2, 0.71)'
}
const btnStyle = {
    backgroundColor: 'brown',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    height: '35px'
}