import { nanoid,createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 1, text : "Hello World"}]
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers :{
        addTodo : (state, action)=>{
            const todo = {id:nanoid(), text : action.payload}
            state.todos.push(todo)
        },
        removeTodo :(state,action)=>{
            // assuming we'll receive the id to remove the todo
            state.todos = state.todos.filter((todo)=>todo.id !=action.payload)

        },
        updateTodo:(state, action)=>{

        }
    }
    
})
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer

