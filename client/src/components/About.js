import React from 'react'

export default function About() {
    return (
        <div>
            <React.Fragment>
                <div style={resultsContainer}>
                    <h1>About</h1>
                    <p>
                        This application is made using the MERN stack and the google books api.
                        It allows the user to search for books by title, and save them to a database,
                        and view books that were saved in the database.
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