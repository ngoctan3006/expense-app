import React from 'react';
import TodoItem from './todoItem';

const TodoList = (props) => {
    console.log(props);
    const todo = props.todo;
    return (
        <div className='todo-list'>
            {todo.map((item, index) => (
                <TodoItem
                    key={index}
                    title={item.task}
                    time={item.time}
                    date={item.date}
                    index={index}
                />
            ))}
        </div>
    );
};
export default TodoList;
