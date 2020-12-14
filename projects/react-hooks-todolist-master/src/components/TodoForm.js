import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (value === '') {
            return;
        };
        addTodo(value);
        setValue("");

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className=" w-100 py-3 h4" placeholder="Add Todo and Hit Enter....."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default TodoForm;