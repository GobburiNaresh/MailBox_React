import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error,setError] = useState(null);

    const history = useHistory();
    
    const LoginHandler = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const response = await axios.post('http://localhost:4000/auth/login', { email, password});
            if(response.status === 200){
                setError(null);
                history.replace('/Home');
                emailRef.current.value = '';
                passwordRef.current.value = '';
            }
            
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="d-grid justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '24rem' }} className="m-5 p-5">
                <Card.Title style={{ textAlign: 'center' }}>Login</Card.Title>
                <Form onSubmit={LoginHandler}>
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
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="m-3">
                            Submit
                        </Button>
                    </div>
                    <div className="text-center">
                    <Form.Text>
                        <Link to="/password">Forgot password</Link>
                    </Form.Text>
                </div>
                </Form>
                <div className="text-center">
                    <Form.Text>
                        Don't have an account? <Link to="/">Signup</Link>
                    </Form.Text>
                </div>
            </Card>
        </div>
    );
};

export default Login;
