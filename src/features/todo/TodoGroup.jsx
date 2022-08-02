import TodoItem from "./TodoItem"
import {useSelector} from "react-redux"

function TodoGroup() {
    const todos = useSelector(state => state.todo.todos)
    const todoList = todos.map((todo) => <TodoItem key={todo.id} id={todo.id} todo={todo}/>)
    return(
        <div>
            {todoList}
        </div>
    )
}

export default TodoGroup