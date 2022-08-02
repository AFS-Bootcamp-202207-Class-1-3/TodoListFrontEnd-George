import "./TodoList.css"
import {useDispatch} from "react-redux"
import {deleteItem, changeStatus} from "./todoSlice"

function TodoItem(props) {
    const dispatch = useDispatch()
    const {id, todo} = props
    const deleteTodo = () => {
        dispatch(deleteItem(id))
    }
    const handleDone = () => {
        dispatch(changeStatus(id))
    }
    return(
        <div >
            <input className={todo.done ? "input-decoration" : "input"} value={todo.context} readOnly onClick={handleDone}/>
            <button onClick={deleteTodo} className="deletebutton">delete</button>
      </div>
    )   
}

export default TodoItem