import "./TodoList.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, changeStatus, updateContent } from "./todoSlice";
import { putTodo, deleteTodo, putContent } from "../apis/todoApi";
import { EditOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { Modal, Spin } from "antd";

function TodoItem(props) {
  const [visible, setVisible] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { todo } = props;
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleDeleteTodo = () => {
    deleteTodo(todo.id).then((reponse) => {
      setGlobalLoading(true)
      dispatch(deleteItem(reponse.data));
      window.location.reload() 
    });
    setGlobalLoading(false)
  };
  const handleUpdateContent = (event) => {
    event.stopPropagation();
    setVisible(true);
  };
  const handleOk = () => {
    putContent(todo.id, { content: text }).then((response) => {
      console.log(response.data);
      dispatch(updateContent(response.data));
    });
    setText("");
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleDone = () => {
    putTodo(todo.id, { done: !todo.done }).then((reponse) => {
      dispatch(changeStatus(reponse.data));
    });
  };
  return (
    <Spin  tip="Loading..." spinning={globalLoading}>
      <div className="item">
        <div
          style={{ textDecoration: todo.done ? "line-through" : "" }}
          className="item-span"
          onClick={handleDone}
        >
          {todo.content}
          <EditOutlined
            onClick={handleUpdateContent}
            style={{ float: "right" }}
          />
        </div>
        <button onClick={handleDeleteTodo} className="button delete-button">
          delete
        </button>
        <Modal
          title="Update Content"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <TextArea
            rows={2}
            value={text}
            placeholder="please input todo here..."
            onChange={handleTextChange}
          />
        </Modal>
      </div>
    </Spin>
  );
}

export default TodoItem;
