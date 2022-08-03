import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./TodoList.css";
function TodoList() {
  return (
    <div>
      <h1 className="item">Todo List</h1>
      <TodoGenerator/>
      <TodoGroup />
    </div>
  );
}

export default TodoList;
