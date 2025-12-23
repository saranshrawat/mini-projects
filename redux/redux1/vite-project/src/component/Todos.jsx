import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/Slice' 


function Todos() {

const dispatch= useDispatch();
const todos= useSelector(state => state.todos)


  return (
    <>
    {
        todos.map((item)=>(
             <li key={item.key}  value={item.text}>  {item.text} 
             
             <button onClick={()=> dispatch(removeTodo(item.id))}>
                Delete
             </button>
             
             
             </li>
        ))
    }
</>  )
}

export default Todos