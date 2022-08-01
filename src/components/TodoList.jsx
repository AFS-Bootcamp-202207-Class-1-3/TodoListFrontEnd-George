import TodoGenerator from "./TodoGenerator"
import {useState} from "react";
import TodoGroup from "./TodoGroup";

function TodoList() {
    const [contents, setContents] = useState([])
    const changeTodo = (contents) => {
        setContents([...contents])
    }
    return(
        <div>
            <h1>Todo List</h1>
            <TodoGroup contents={contents} changeTodo={changeTodo}/>
            <TodoGenerator contents={contents} changeTodo={changeTodo}/>
        </div>
    )
}

export default TodoList