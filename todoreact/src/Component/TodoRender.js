import React from 'react'

export default function TodoEdit(props) {
    return (
        <div>
        <h1>{props.item.user}</h1>
        <h3>{props.item.status}</h3>
        <p>{props.item.comment}</p>
        {props.item.id>0?<button onClick={()=>props.handleDel(props.item)}>Delete</button>:""}
        {props.item.id>0?<button onClick={()=>props.editItem(props.item)}>Edit</button>:""}
        <input name="user" value={props.userEdit.user} />
      <input name="status" value={props.userEdit.status} />
      <input name="comment" value={props.userEdit.comment} />
      
        </div>)
}