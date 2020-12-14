import React from 'react'

function Todo({ index, todo, completeTodo, removeTodo }) {
    return (
        <div className='row bg-light mb-3 rounded'>
            <div className="col-lg-9 col-md-8 col-sm-6 h4 py-1" style={{ textDecoration: todo.isCompleted ? "line-through" : '', color: todo.isCompleted ? "red" : '' }}>
                {todo.text}
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5 ">
                <button className="btn btn-secondary btn-block py-2" onClick={() => completeTodo(index)}>Completed</button>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1">
                <button className="btn btn-danger btn-block py-2 " onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}

export default Todo;