import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Form = ({ setInputText, todos, setTodos, inputText, setStatus, user, getTodos }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        axios.post('/api/notes', { text: inputText, completed: false })
            .then(() => {
                getTodos()
                setInputText("");
            })
    }

    return (
        <div className="wrapper">
            {/* where options were */}
            <form> 
                <div className="form-wrapper">
                    <input className="todo-input" placeholder="TYPE HERE...." value={inputText} onChange={inputTextHandler} type="text" />
                    <div className="todo-button-outline">
                        <button className="todo-button" onClick={submitTodoHandler} type="submit" >
                            <i className="fas fa-plus-square">SUBMIT</i>
                        </button>
                    </div>
                    <div className="loggedWrap">
                        <h2 className="loggedInfo">LOGGED AS:</h2>
                        <h2 className="loggedUser">{user.email}</h2>
                    </div>
                </div>
            </form>
        </div>
    );
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Form); 