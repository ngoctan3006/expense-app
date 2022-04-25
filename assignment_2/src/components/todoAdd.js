import React, { useState } from 'react';

const TodoAdd = (props) => {
    const [value, setValue] = useState('');
    const inputChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <form>
            <input
                type='text'
                placeholder='Add todo'
                value={value}
                onChange={inputChange}
                required
            />
            <div className='time-date'>
                <input type='time' />
                <input type='date' />
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.addTodo(value);
                }}
            >
                Add to list
            </button>
        </form>
    );
};

export default TodoAdd;
