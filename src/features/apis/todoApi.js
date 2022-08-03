import { api } from "./api";

export const getTodos = () => {
  return api.get("/todos");
};

export const postTodo = (content) => {
  return api.post("/todos", content);
};

export const putTodo = (id, done) => {
  return api.put(`/todos/${id}`, done);
};

export const deleteTodo = (id) => {
  return api.delete(`/todos/${id}`);
};

export const putContent = (id, content) => {
  return api.put(`/todos/${id}`, content);
};
