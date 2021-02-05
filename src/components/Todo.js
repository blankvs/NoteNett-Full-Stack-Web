import React from 'react'
import CHECK from '../assets/CHECK.png'
import X from '../assets/X.png'
import PIN from '../assets/PIN.png'
import axios from 'axios'



const Todo = ({ text, todo, todos, setTodos, getTodos, deleteTodos }) => {
    
    
    const deleteHandler = () => {
        axios.delete('/api/notes', { id: todo.id })
        .then(() => {
            deleteTodos()
        })
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        axios.put('/api/notes', { id: todo.id, completed: !todo.completed, })
        .then(() => {
            getTodos()
        })

}

    const editHandler = () => {
        console.log(todo.text)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}
                <div className="OptionsBox">
                    <button className="pin-btn">
                        <i className="fas fa-pin"><img className="PinImg" src={PIN}></img></i>
                    </button>
                    <button className="complete-btn" onClick={completeHandler}>
                        <i className="fas fa-check"><img className="CheckImg" src={CHECK}></img></i>
                    </button>
                    <button className="trash-btn" onClick={deleteHandler}>
                        <i className="fas fa-trash"><img className="XImg" src={X}></img></i>
                    </button>
                </div>
            </li>
        </div>
    )
}  

export default Todo;