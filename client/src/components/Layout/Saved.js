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
                <ul>
                    {this.state.savedBooks.map(result => (
                        <li className="list-group-item" key={result._id}>
                            <h3>{result.title}</h3>
                            <h3>-{result.author}</h3>
                            <img alt={result.title} className="img-fluid" src={result.image} />
                            <p>Description: {result.synopsis}</p>
                            <a target="_blank" href={result.link}>infoLink</a>
                            <button result={result} onClick={() => this.delBook(result._id)} dataid={result._id}>delete book</button>
                        </li>))}
                </ul>
            </React.Fragment>
        )
    }
}

export default Saved
