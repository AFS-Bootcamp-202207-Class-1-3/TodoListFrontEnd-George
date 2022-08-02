import "./TodoList.css"
import {useState} from "react"
import {useDispatch} from "react-redux"
// import {addContent} from "./todoSlice"
function TodoGenerator(props) {
    const {contents} = props
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const changeContent = (event) => {
        setText(event.target.value)
    }
    const clickAdd = () => {
        if (text.length !== 0)  {
            const addedContents = [...contents, text] 
            // dispatch(addContent())
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