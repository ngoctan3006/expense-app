import React from 'react';

const TodoItem = ({ title, time, date, index }) => {
    return (
        <div className='todo-item'>
            <div className='task'>
                <div className='task-title'>
                    <h4>
                        {index + 1}. {title}
                    </h4>
                </div>
                <div className='task-detail'>
                    <p>Time: {time}</p>
                    <p>Date: {date}</p>
                </div>
            </div>
            <div className='action'>
                <i className='fa-solid fa-check'></i>
                <i className='fa-solid fa-trash-can'></i>
            </div>
        </div>
    );
};

export default TodoItem;
