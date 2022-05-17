import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ExpenseHeading from './Components/ExpenseHeading';
import ExpenseItems from './Components/ExpenseItems';

function App() {
    const [listExpense, setListExpense] = useState([
        {
            title: 'Finish HW',
            price: 50,
            date: '2022-03-24',
        },
        {
            title: 'Prepare session 3',
            price: 75,
            date: '2022-03-24',
        },
        {
            title: 'Study React',
            price: 100,
            date: '2022-03-24',
        },
    ]);

    const handleSubmitExpense = (expense) => {
        setListExpense([...listExpense, expense]);
    };

    return (
        <div className='App'>
            <div className='main'>
                <ExpenseHeading onAddExpense={handleSubmitExpense} />
                <div className='container'>
                    <div className='filter'>
                        <p>Filter by year</p>
                        <div className='year-selector'>
                            <select>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                            </select>
                        </div>
                    </div>

                    <div className='chart-container'>
                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Jan</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Feb</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Mar</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Apr</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>May</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Jun</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Jul</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Aug</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Sep</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Oct</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Nov</p>
                        </div>

                        <div className='chart-item'>
                            <div className='bar'>
                                <div className='fill'></div>
                            </div>
                            <p className='month'>Dec</p>
                        </div>
                    </div>

                    <div className='expense-container'>
                        {listExpense.map((e, i) => {
                            return <ExpenseItems key={i} item={listExpense[i]} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
