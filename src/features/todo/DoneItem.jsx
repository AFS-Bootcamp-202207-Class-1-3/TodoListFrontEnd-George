import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
function DoneItem() {
  const todos = useSelector((state) => state.todo.todos);
  const dones = todos
    .filter((todo) => todo.done)
    .map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index} />);

  return <div>{dones}</div>;
}

export default DoneItem;
