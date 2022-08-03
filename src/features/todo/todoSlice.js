import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push({ id: uuidv4(), ...action.payload });
    },
    deleteItem(state, action) {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    changeStatus(state, action) {
      const updateIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[updateIndex].done = !state.todos[updateIndex].done;
    },
  },
});
export const { add, deleteItem, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
