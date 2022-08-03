import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {
  const todos = useSelector((state) => state.todo.todos);
  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} id={todo.id} />
  ));
  return <div>{todoList}</div>;
}

export default TodoGroup;
