import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"
import Form from './Form'
import TodoList from './TodoList'
import '../Scss/notesStyle.scss'

function Notes() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]); 
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    const filterHandler = () => {
        switch(status){
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

        return(
            <div className="box">
                <Form 
                    inputText={inputText} 
                    todos={todos} 
                    setTodos={setTodos} 
                    setInputText={setInputText} 
                    setStatus={setStatus}
                />
                <TodoList 
                    filteredTodos={filteredTodos} 
                    setTodos={setTodos} 
                    todos={todos} 
                />
            </div>
        )
}

export default Notes;