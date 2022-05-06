import React from 'react';
import { Button } from 'reactstrap';

const Student = ({ id, name, age, math, english, history, avgScore, onDelete }) => {
    const handleGetId = () => {
        onDelete(id);
    };

    return (
        <tr>
            <th scope='row'>{id}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td>{math}</td>
            <td>{english}</td>
            <td>{history}</td>
            <td>{avgScore}</td>
            <td>
                <Button color='success'>Update</Button>
                <Button color='danger' onClick={handleGetId}>
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default Student;
