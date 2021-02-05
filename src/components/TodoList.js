import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos, getTodos, deleteTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        getTodos={getTodos}
                        deleteTodos={deleteTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;