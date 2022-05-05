import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import React, { useState } from 'react';

function ModalStudent({ onAddStudent }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [math, setMath] = useState('');
    const [english, setEnglish] = useState('');
    const [history, setHistory] = useState('');

    const handleAddStudent = () => {
        const student = {
            id,
            name,
            age,
            math,
            english,
            history,
        };
        onAddStudent(student);
    };

    const handleAddId = (event) => {
        setId(event.target.value);
    };
    const handleAddName = (event) => {
        setName(event.target.value);
    };
    const handleAddAge = (event) => {
        setAge(event.target.value);
    };
    const handleAddMath = (event) => {
        setMath(event.target.value);
    };
    const handleAddEnglish = (event) => {
        setEnglish(event.target.value);
    };
    const handleAddHistory = (event) => {
        setHistory(event.target.value);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant='primary' onClick={handleShow}>
                Add new student
            </Button>

            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Student's Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicId'>
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control
                                type='number'
                                value={id}
                                onChange={handleAddId}
                                placeholder='Enter student ID'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control
                                type='text'
                                value={name}
                                onChange={handleAddName}
                                placeholder='Enter student name'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicAge'>
                            <Form.Label>Student Age</Form.Label>
                            <Form.Control
                                type='number'
                                value={age}
                                onChange={handleAddAge}
                                placeholder='Enter student age'
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Math</Form.Label>
                                <Form.Control
                                    placeholder='Math score'
                                    type='number'
                                    value={math}
                                    onChange={handleAddMath}
                                />
                            </Col>
                            <Col>
                                <Form.Label>English</Form.Label>
                                <Form.Control
                                    placeholder='English score'
                                    type='number'
                                    value={english}
                                    onChange={handleAddEnglish}
                                />
                            </Col>
                            <Col>
                                <Form.Label>History</Form.Label>
                                <Form.Control
                                    placeholder='History score'
                                    type='number'
                                    value={history}
                                    onChange={handleAddHistory}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleAddStudent}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalStudent;
