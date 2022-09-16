import { useState } from 'react'

const Form = ({ todoList, setTodoList }) => {

    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList([...todoList, {title: newTodo, complete: false}])
        setNewTodo('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
                />
                <input type="submit" value={'Lets do it!'} />
            </form>
        </>
    )
}

export default Form