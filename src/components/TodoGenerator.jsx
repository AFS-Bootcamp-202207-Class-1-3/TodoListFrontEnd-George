import "./TodoList.css"
function TodoGenerator(props) {
    const {changeTodo, contents} = props
    const onClick = () => {
        const contentValue = document.getElementById("contentValue").value
        if (contentValue.length !== 0)  {
            contents.push(contentValue)
            changeTodo(contents)
        }
    }
    return(
       <div>
            <input className="input" type="text" id="contentValue"></input>
            <button className="button" onClick={onClick}>add</button>
       </div> 
    )
}

export default TodoGenerator