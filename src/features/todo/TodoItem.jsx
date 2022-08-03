import "./TodoList.css";
import { useDispatch } from "react-redux";
import { deleteItem, changeStatus } from "./todoSlice";
import { putTodo, deleteTodo } from "../apis/todoApi";

function TodoItem(props) {
  const dispatch = useDispatch();
  const { todo } = props;
  const handleDeleteTodo = () => {
    deleteTodo(todo.id).then((reponse) => {
      dispatch(deleteItem(reponse.data));
    });
  };
  const handleDone = () => {
    putTodo(todo.id, { done: !todo.done }).then((reponse) => {
      dispatch(changeStatus(reponse.data));
    });
  };
  return (
    <div>
      <input
        className={`input ${todo.done ? "input-decoration" : ""}`}
        value={todo.content}
        readOnly
        onClick={handleDone}
      ></input>
      <button onClick={handleDeleteTodo} className="button delete-button">
        delete
      </button>
    </div>
  );
}

export default TodoItem;
