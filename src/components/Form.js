import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Form = ({ setInputText, todos, setTodos, inputText, setStatus, user}) => {

    

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)

    }

    return (
        <form>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <div className="form-wrapper">
                <input className="todo-input" placeholder="Type here..." value={inputText} onChange={inputTextHandler} type="text" />
                <div className="todo-button-outline">
                    <button className="todo-button" onClick={submitTodoHandler} type="submit" >
                        <i className="fas fa-plus-square">SUBMIT</i>
                    </button>
                </div>
                <div>
                    <h2 className="loggedInfo">LOGGED AS:</h2>
                    <h2>{user.email}</h2>
                </div>
            </div>
        </form>
    );
}

function mapStateToProps (reduxState) {
    return reduxState
} 

export default connect(mapStateToProps)(Form); 