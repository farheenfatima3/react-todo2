import './App.css';
import {useState} from 'react'
import TodoItem from './Component/TodoItem';
import TodoEdit from './Component/TodoRender';

function App() {
let a="this is ok"
let b=a.split('')
b.reverse().join('')
console.log(b)
  let [myObj,setMyObj]=useState([{ 
  id:'',
  user:"",
  status:"",
  comment:""}])
let [userInput,setUserInput]=useState({
    id:"",
    user:"",
    status:"",
    comment:""
})
let [userEdit,setUserEdit]=useState({
  id:"",
  user:"",
  status:"",
  comment:""
})
const [editInput,setEditInput]=useState("")

const handleChange=(e)=>{
  e.preventDefault()
  let value=e.target.value
  let fieldName=e.target.getAttribute('name')
  userInput[fieldName]=value
  setUserInput(userInput)
}

const handleClick=(e)=>{
  e.preventDefault()
  let ids=Number(myObj[myObj.length-1].id)+1
  let newInput={
    id:ids,
    user:userInput.user,
    status:userInput.status,
    comment:userInput.comment
  }
let data=[...myObj,newInput]
setMyObj(data)
let clear=document.querySelectorAll("input")
clear.forEach((item)=>item.value="")
}

function handleDel(itemId){

let newObj=[...myObj]
 let ind=newObj.findIndex((item)=>(item.id===itemId.id))
 newObj.splice(ind,1) 
 setMyObj(newObj)
}

// function editItem(e){


// }
const editShow=(e)=>{
  let editObj={
    user:e.user,
    status:e.status,
    comment:e.comment
  }
  setUserEdit(editObj)
}
  return (
    <div className="App">
      {myObj.map((item)=>{
     return(
       <>
      <TodoEdit item={item} userEdit={userEdit} editItem={editShow} handleDel={handleDel}/>
      </>
      )
      })}
      <form onSubmit={handleClick}>
      <TodoItem handleChange={handleChange}/>
      </form>
    </div>
  );
}

export default App;
