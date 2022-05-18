import React from 'react';

const ExpenseItems = ({ item }) => {
    if (item.date)
        return (
            <div className="expense-item">
                <div className="date-container">
                    <p>
                        {new Intl.DateTimeFormat('en-US', {
                            month: 'long',
                        }).format(new Date(item.date))}
                    </p>
                    <p>{new Date(item.date).getFullYear()}</p>
                    <p className="date">{new Date(item.date).getDate()}</p>
                </div>
                <p className="title">{item.title}</p>
                <div className="amount">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(item.price)}
                </div>
            </div>
        );
};

export default ExpenseItems;
