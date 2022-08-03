import "./TodoList.css";
import { useDispatch } from "react-redux";
import { deleteItem, changeStatus } from "./todoSlice";

function TodoItem(props) {
  const dispatch = useDispatch();
  const { todo, id } = props;
  const deleteTodo = () => {
    dispatch(deleteItem(id));
  };
  const handleDone = () => {
    dispatch(changeStatus(id));
  };
  return (
    <div>
      <input
        className={`input ${todo.done ? "input-decoration" : ""}`}
        value={todo.context}
        readOnly
        onClick={handleDone}
      />
      <button onClick={deleteTodo} className="button delete-button">
        delete
      </button>
    </div>
  );
}

export default TodoItem;
