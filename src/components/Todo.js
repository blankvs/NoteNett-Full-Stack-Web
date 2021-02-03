import React from 'react'
import CHECK from '../assets/CHECK.png'
import X from '../assets/X.png'
import PIN from '../assets/PIN.png'



const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
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