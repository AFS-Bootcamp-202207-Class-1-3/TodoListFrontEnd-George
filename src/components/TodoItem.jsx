import "./TodoList.css"
function TodoItem(props) {
    const {content, contents, changeTodo, index} = props
    const deleteTodo = () => {
        contents.splice(index, 1)
        changeTodo(contents)
    }
    return(
        <div >
            <input className="input" value={content} readOnly/>
            <button onClick={deleteTodo} className="deletebutton">delete</button>
      </div>
    )   
}

export default TodoItem