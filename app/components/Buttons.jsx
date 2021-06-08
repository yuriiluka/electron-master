import React from 'react'

export default function List(props) {
  return (
    <div>
     <input id="listInput" type="text" placeholder="add new to-do" onChange={props.handleInputBoxChange}></input> 
     <button onClick={() => {document.getElementById('listInput').value = ''; props.submitItem()}}>Submit</button>
    </div>
  )
} 
