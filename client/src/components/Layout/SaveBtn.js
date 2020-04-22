import React from 'react'

export default function SaveBtn(props) {
    return (
        <div>
            <button onClick={()=> {props.saveBook(props.result)   }}>Save</button>
        </div>
    )
}
