import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4} from "uuid"

const initialState = {
    todos: []
} 

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add(state, action) {
            state.todos.push({id: uuidv4(), ...action.payload})
        },
        deleteItem(state, action) {
            state.todos.splice(action.payload,1)
        },
        changeStatus(state, action) {
            state.todos[action.payload].done  = !state.todos[action.payload].done
        }
    }
})
export const {add, deleteItem, changeStatus} = todoSlice.actions
export default todoSlice.reducer