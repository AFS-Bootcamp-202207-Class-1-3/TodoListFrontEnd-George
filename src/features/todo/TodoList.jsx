import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoGenerator />
      <TodoGroup />
    </div>
  );
}

export default TodoList;
