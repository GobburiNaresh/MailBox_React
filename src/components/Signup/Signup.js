import React,{useRef} from 'react';
import {Form,Button,Card} from 'react-bootstrap';


const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const signupHandler = (event) => {
        event.preventDefault();
        const signupDetails = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }

        console.log(signupDetails);
        emailRef.current.value = '';
        passwordRef.current.value = '';
        confirmPasswordRef.current.value = '';


    }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{width: '24rem'}} className='m-5 p-5'>
                <Card.Title style={{textAlign: 'center'}}>Signup</Card.Title>
                <Form onSubmit={signupHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control required type='email' placeholder='Enter Email' ref={emailRef}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control required type='password' placeholder='password' ref={passwordRef}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control required type='password' placeholder='confirm password' ref={confirmPasswordRef}></Form.Control>
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className='m-3'>
                        Submit
                    </Button>
                </div>
                </Form>
                
            </Card>
        </div>
        
        
    )
}

export default Signup;