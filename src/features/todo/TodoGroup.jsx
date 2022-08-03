import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../apis/todoApi";
import { useEffect } from "react";
import { addTodos } from "./todoSlice";

function TodoGroup() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos().then((response) => {
      dispatch(addTodos(response.data));
    });
  }, [dispatch]);
  const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  return <div>{todoList}</div>;
}

export default TodoGroup;
