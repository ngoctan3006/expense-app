import React from 'react';

const TodoCount = ({ todo }) => {
    return <div className='todo-count'>Total tasks: {todo.length}</div>;
};

export default TodoCount;
