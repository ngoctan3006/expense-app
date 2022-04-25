import './App.css';
import TodoList from './components/todoList';
import TodoAdd from './components/todoAdd';
import TodoCount from './components/todoCount';
import { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([
        {
            task: 'Finish HW',
            time: '12:00',
            date: '2022-03-24',
        },
        {
            task: 'Prepare session 3',
            time: '15:00',
            date: '2022-03-24',
        },
        {
            task: 'Study React',
            time: '19:30',
            date: '2022-03-24',
        },
    ]);

    const addTodo = (value) => {
        setTodos([...todos, { task: value }]);
    };

    return (
        <div className='App'>
            <div className='container'>
                <h1>Todo List</h1>
                <div className='todo'>
                    <TodoAdd addTodo={addTodo} />
                    <TodoList todo={todos} />
                    <TodoCount todo={todos} />
                </div>
            </div>
        </div>
    );
}

export default App;
