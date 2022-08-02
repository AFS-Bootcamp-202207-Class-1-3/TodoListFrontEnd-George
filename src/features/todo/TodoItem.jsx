import "./TodoList.css"
function TodoItem(props) {
    const {context} = props
    const deleteTodo = () => {
        // contents.splice(index, 1)
        // changeTodo(contents)
    }
    return(
        <div >
            {context}
            <input className="input"  readOnly/>
            <button onClick={deleteTodo} className="deletebutton">delete</button>
      </div>
    )   
}

export default TodoItem