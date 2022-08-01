import TodoItem from "./TodoItem"

function TodoGroup(props) {
    const {contents} = props
    const items = contents.map((content, index) => (<TodoItem key={index} content={content}/>))
    return(
        <div>
            {items}
        </div>
    )
}

export default TodoGroup