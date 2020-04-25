import React from 'react'

export default function SaveBtn(props) {
    return (
        <div>
            <button style={btnStyle} onClick={()=> {props.saveBook(props.result)   }}>Save</button>
        </div>
    )
}

const btnStyle = {
    backgroundColor: 'brown',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    height: '35px'
}