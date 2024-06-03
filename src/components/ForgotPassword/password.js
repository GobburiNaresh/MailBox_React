import React, { useRef} from 'react';
import { Form, Button, Card} from 'react-bootstrap';
// import axios from 'axios';


const Password = () => {
    const emailRef = useRef();
    
    const PasswordHandler = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        console.log(email);
        
        // try {
        //     const response = await axios.post('http://localhost:4000/login', { email, password});
        //     console.log(response);
        //     setError(null);
        // } catch (error) {
        //     setError(error.response?.data?.message || 'Something went wrong');
        // }

        emailRef.current.value = '';
    };

    return (
        <div className="d-grid justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '24rem' }} className="m-5 p-5">
                <Card.Title style={{ textAlign: 'center' }}>Forgot Password</Card.Title>
                <Form onSubmit={PasswordHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter Email"
                            ref={emailRef}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="m-3">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default Password;
