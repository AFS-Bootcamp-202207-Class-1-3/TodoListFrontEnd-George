import "./TodoList.css"
import {useDispatch} from "react-redux"
import {deleteItem, changeStatus} from "./todoSlice"

function TodoItem(props) {
    const dispatch = useDispatch()
    const {todo, index} = props
    const deleteTodo = () => {
        dispatch(deleteItem(index))
    }
    const handleDone = () => {
        dispatch(changeStatus(index))
    }
    return(
        <div >
            <input className={todo.done ? "input-decoration" : "input"} 
            value={todo.context} readOnly onClick={handleDone}/>
            <button onClick={deleteTodo} className="deletebutton">delete</button>
      </div>
    )   
}

export default TodoItem