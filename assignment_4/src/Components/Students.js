import React from 'react';
import { Button } from 'react-bootstrap';

import UpdateStudent from './UpdateStudent';

const Student = ({ info, avgScore, onDelete, onUpdate }) => {
    const handleGetId = () => {
        onDelete(info.id);
    };

    return (
        <tr>
            <th scope='row'>{info.id}</th>
            <td>{info.name}</td>
            <td>{info.age}</td>
            <td>{info.math}</td>
            <td>{info.english}</td>
            <td>{info.history}</td>
            <td>{avgScore}</td>
            <td>
                <UpdateStudent oldValue={info} onUpdate={onUpdate} />
                <Button variant='danger' onClick={handleGetId}>
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default Student;
