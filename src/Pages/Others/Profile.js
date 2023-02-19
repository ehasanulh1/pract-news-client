import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={<>Accept <Link to='/terms'>Term & Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Form.Group className="mt-2">
                <Form.Text>Already have an account? <Link to='/login'>Please Login</Link></Form.Text>
            </Form.Group>
        </Form>
    );
};

export default Profile;