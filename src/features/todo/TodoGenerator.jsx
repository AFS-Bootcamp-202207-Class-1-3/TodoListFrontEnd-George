import "./TodoList.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./todoSlice";
import { postTodo } from "../apis/todoApi";

function TodoGenerator() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const changeContent = (event) => {
    setText(event.target.value);
  };
  const clickAdd = () => {
    if (text.length !== 0) {
      postTodo({ content: text }).then((response) => {
        dispatch(add(response.data));
      });
    }
    setText("");
  };
  return (
    <div className="item">
      <input
        className="input"
        type="text"
        onChange={changeContent}
        value={text}
      ></input>
      <button className="button general-button" onClick={clickAdd}>
        add
      </button>
    </div>
  );
}

export default TodoGenerator;
