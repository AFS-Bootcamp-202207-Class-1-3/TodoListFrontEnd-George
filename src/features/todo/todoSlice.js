import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
    },
    deleteItem(state, action) {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    changeStatus(state, action) {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].done = action.payload.done;
    },
    addTodos(state, action) {
      state.todos = action.payload;
    },
    updateContent(state, action) {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].content = action.payload.content;
    },
  },
});
export const { add, deleteItem, changeStatus, addTodos, updateContent } =
  todoSlice.actions;
export default todoSlice.reducer;
