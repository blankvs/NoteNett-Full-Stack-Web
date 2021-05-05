import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'
import '../Scss/NotesStyle.scss'

function Notes() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    useEffect(() => {
        getTodos()
    }, [])

    function getTodos() {
        axios.get('/api/notes').then((res) => {
            setTodos(res.data)
        })
    }
    
    function deleteTodos() {
        axios.delete('/api/notes').catch.then((res) => {
            deleteTodos(res.data)
        })
    }

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    

    return (
        <div>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option className="all-option" value="all">All</option>
                        <option className="completed-option" value="completed">Completed</option>
                        <option className="uncompleted-option" value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div className="scrollBox">
                <div className="box">
                    <TodoList
                        filteredTodos={filteredTodos}
                        setTodos={setTodos}
                        todos={todos}
                        getTodos={getTodos}
                    // deleteTodos={deleteTodos}
                    />
                </div>
                <div>
                    <Form
                        inputText={inputText}
                        todos={todos}
                        setTodos={setTodos}
                        setInputText={setInputText}
                        setStatus={setStatus}
                        getTodos={getTodos}
                    />
                </div>
            </div>
        </div>
    )
}

export default Notes;