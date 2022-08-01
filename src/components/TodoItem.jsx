function TodoItem(props) {
    const {content} = props
    return(
        <div >
            <input value={content}/>
      </div>
    )   
}

export default TodoItem