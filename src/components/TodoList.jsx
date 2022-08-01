import TodoGenerator from "./TodoGenerator"
import {useState} from "react";
import TodoGroup from "./TodoGroup";

function TodoList() {
    const [contents, setContents] = useState([])
    const addTodo = (content) => {
        setContents([...content])
    }
    return(
        <div>
            <h1>Todo List</h1>
            <TodoGroup contents={contents}/>
            <TodoGenerator contents={contents} addTodo={addTodo}/>
        </div>
    )
}

export default TodoList