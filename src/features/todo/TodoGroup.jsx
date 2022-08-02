import TodoItem from "./TodoItem"

function TodoGroup(props) {
    const {contents, changeTodo} = props
    const items = contents.map((content, index) => (<TodoItem key={index} index={index} content={content} contents={contents} changeTodo={changeTodo}/>))
    return(
        <div>
            {items}
        </div>
    )
}

export default TodoGroup