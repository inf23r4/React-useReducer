import React, { useReducer, useState } from 'react';
import style from './style';

const initialTodos = [
    { id: 1, title: "todo #1"},
    { id: 2, title: "todo #2"},
]

const types = {
    add: "add",
    update: "update",
    delete: "delete"
};

const reducer =(state, action) => {
    switch(action.type) {
            case types.delete:
                return state.filter(todo => todo.id !== action.payload)

            case types.add:
                return [...state, action.payload]
            
            case types.update:{
                const todoEdit = action.payload
                return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo)
                }
        default:
            return state;
    }
}
function TodoApp() {

    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const [ text, setText ] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newTodo = { id: Date.now(), title: text}
        dispatch({ 
            type: types.add, 
            payload: newTodo})
    }

    return (
        <div style={style.component}>
            <h1>Todo App</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button style={style.button} onClick={()=>dispatch({
                            type: types.delete,
                            payload : todo.id 
                        })}>delete</button>
                        <button style={style.button} onClick={()=>dispatch({
                            type: types.update,
                            payload : {...todo, title: text} 
                        })}>update</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Todo"
                    value={text}
                    onChange={e => setText(e.target.value)}/>
            </form>
        </div>
    )
}

export default TodoApp
