import React from 'react'

export const List = (props) => {
  let itemsJSX = [];
  props.items.forEach( (li, idx) => {
    itemsJSX.push(
      <div key={idx}>
        <li>{li}</li>
        <button name={idx} onClick={props.handleDeleteButton}>X</button>
      </div>
    )
  })
  return (
    <div>
      <ol>
        {itemsJSX}
      </ol>
    </div>
  )
}
