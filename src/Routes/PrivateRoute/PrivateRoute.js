import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        console.log('this is loading')
        return <Spinner animation='grow' variant='primary' />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;