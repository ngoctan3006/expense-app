import './App.css';
import { Table, Container } from 'reactstrap';
import { useState } from 'react';
import Student from './Components/Students';
import ModalStudent from './Components/ModalStudent';

function App() {
    const [listStudents, setListStudents] = useState([
        {
            id: 1,
            name: 'Nguyen Van A',
            age: 15,
            math: 8,
            english: 9,
            history: 7,
        },
        {
            id: 2,
            name: 'Nguyen Van B',
            age: 18,
            math: 9,
            english: 9,
            history: 9,
        },
    ]);

    const handleSubmitStudent = (student) => {
        setListStudents([...listStudents, student]);
    };

    return (
        <Container>
            <ModalStudent onAddStudent={handleSubmitStudent} />
            <Table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Math</th>
                        <th>English</th>
                        <th>History</th>
                        <th>Avg. Score</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudents.map((e, i) => {
                        return (
                            <Student
                                key={i}
                                id={e.id}
                                name={e.name}
                                age={e.age}
                                math={e.math}
                                english={e.english}
                                history={e.history}
                                avgScore={(
                                    (parseInt(e.math) + parseInt(e.english) + parseInt(e.history)) /
                                    3
                                ).toFixed(2)}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default App;
