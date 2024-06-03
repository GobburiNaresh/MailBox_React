import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState(null);

    const history = useHistory();

    const signupHandler = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await axios.post('http://localhost:4000/auth/signup', { email, password, confirmPassword });
            history.replace('/login');
            setError(null);
            emailRef.current.value = '';
            passwordRef.current.value = '';
            confirmPasswordRef.current.value = '';
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="d-grid justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '24rem' }} className="m-5 p-5">
                <Card.Title style={{ textAlign: 'center' }}>Signup</Card.Title>
                <Form onSubmit={signupHandler}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter Email"
                            ref={emailRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Confirm Password"
                            ref={confirmPasswordRef}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="m-3">
                            Submit
                        </Button>
                    </div>
                </Form>
                <div className="text-center">
                    <Form.Text>
                        Have an account? <Link to="/login">Login</Link>
                    </Form.Text>
                </div>
            </Card>
        </div>
    );
};

export default Signup;
