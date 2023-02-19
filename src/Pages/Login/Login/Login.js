import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {

    const { signIn, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Your email is not verified. Please verify email.')
                }
                console.log(user)
                form.reset();
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false)
            })

        console.log(email, password)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>

            <Form.Group className='mb-2'>
                <Form.Text className='text-danger mb-2'>{error.slice(16, 100)}</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Form.Group className="mt-2">
                <Form.Text>New to this website? <Link to='/register'>Please register</Link></Form.Text>
            </Form.Group>
        </Form>
    );
};

export default Login;