import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const ExpenseHeading = ({ handleAddExpense }) => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [item, setItem] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setValidated(false);
        setShow(true);
    };

    const handleChange = (e) => {
        setItem((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            handleAddExpense(item);
            setShow(false);
            setItem({});
        }
    };

    return (
        <div className="heading">
            {show ? (
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    style={{ width: '100%' }}
                >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="title"
                                value={item.title}
                                onChange={handleChange}
                                placeholder="Enter name here ..."
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name="price"
                                value={item.price}
                                onChange={handleChange}
                                placeholder="Enter amount here ..."
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose an amount.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                name="date"
                                value={item.date}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a date.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button
                        type="submit"
                        style={{
                            backgroundColor: '#862796',
                            fontWeight: 'bold',
                            border: 'none',
                            textTransform: 'uppercase',
                        }}
                    >
                        Add
                    </Button>

                    <Button
                        className="ms-2"
                        style={{
                            backgroundColor: '#D0D0D0',
                            fontWeight: 'bold',
                            border: 'none',
                            color: '#7C7C7C',
                            textTransform: 'uppercase',
                        }}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </Form>
            ) : (
                <button className="open-btn" onClick={handleShow}>
                    Add new expense
                </button>
            )}
        </div>
    );
};

export default ExpenseHeading;
