import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../../features/todo/todoSlice';

function AddTodos() {
   const [input,setInput]=useState("");
   const dispatch = useDispatch()

  const  todoHandler =()=>{
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <>
    <input type="text" placeholder='Enter the new Todo' onChange={(e)=>{setInput(e.target.value)}} value={input} />
    <button onClick={()=>{todoHandler()}}>Add</button>
    
    
    </>
  )
}

export default AddTodos
