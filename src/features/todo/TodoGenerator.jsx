import "./TodoList.css"
import {useState} from "react"
function TodoGenerator(props) {
    const {changeTodo, contents} = props
    const [text, setText] = useState("")
    const changeContent = (event) => {
        setText(event.target.value)
    }
    const clickAdd = () => {
        if (text.length !== 0)  {
            const addedContents = [...contents, text] 
            changeTodo(addedContents)
        }
    }
    return(
       <div>
            <input className="input" type="text" id="contentValue" onChange={changeContent}></input>
            <button className="button" onClick={clickAdd}>add</button>
       </div> 
    )
}

export default TodoGenerator