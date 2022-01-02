import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
         <input name="user" required="required" onChange={(e)=>props.handleChange(e)}/>
      <input name="status" required="required" onChange={(e)=>props.handleChange(e)}/>
      <input name="comment" required="required" onChange={(e)=>props.handleChange(e)}/>
      <button type="submit">Add</button>
    </div>
    )
}
