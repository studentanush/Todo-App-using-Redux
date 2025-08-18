// importing the createSlice,nanoid from redux toolKit
// nanoid is used to generate unique ids
// createSlice is a method
import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {       // initialState can be any object or array
    todos: [{ id: 1, text: "hello world" }]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {               // reducer is property and it contains functions
        addTodo: (state, action) => {// state provides access to all the values of the initialState.action me data pass hota hai
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // filter always gives out the true values it will ignore the id which we dont want
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload; // payload = { id, newText }
            const todo = state.todos.find((t) => t.id === id);
            if (todo) {
                todo.text = newText; // direct update
            }
        }
    }
})
export const {addTodo ,removeTodo} = todoSlice.actions
export default todoSlice.reducer 