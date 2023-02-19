import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification();
                console.log('toast')
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

        console.log(name, email, photoURL, password)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
    }


    return (
        <Form onSubmit={handleSubmit}>
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

            <Form.Text className='text-danger'>{error}</Form.Text>

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

export default Register;