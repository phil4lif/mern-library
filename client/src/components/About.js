import React from 'react'

export default function About() {
    return (
        <div>
            <React.Fragment>
                <div style={resultsContainer}>
                    <h1>About</h1>
                    <p>
                        Made by Phil Cowan for educational purposes.
                    </p>
                </div>
            </React.Fragment>

        </div>
    )
}

const resultsContainer = {
    marginTop: '100px',
    marginLeft: '25%',
    maxWidth: '50%',
    backgroundColor: 'rgba(190, 125, 2, 0.71)',
    padding: '15px'
  }