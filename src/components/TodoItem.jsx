import "./TodoList.css"
function TodoItem(props) {
    const {content} = props
    return(
        <div >
            <input className="input" value={content}/>
      </div>
    )   
}

export default TodoItem