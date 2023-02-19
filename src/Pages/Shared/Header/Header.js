import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    console.log(user)
    return (
        <div>
            <Navbar key="lg" bg="light" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand href="#" className='fw-bold'>Pract News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Offcanvas>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-="lg"`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                                <Link className='me-4 text-decoration-none ' to='/'>Home</Link>
                                {
                                    user?.uid
                                        ?
                                        <>
                                            <span className='me-3'>Welcome to {user?.email}</span>
                                            <Button onClick={handleLogOut}>Log out</Button>
                                            <Link className='ms-3' to='/profile'>
                                                {user?.photoURL
                                                    ?
                                                    <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL} />
                                                    :
                                                    <FaUserCircle className='fs-1' />
                                                }
                                            </Link>
                                        </>
                                        :
                                        <>
                                            <Link className='me-3 text-decoration-none ' to='/login'>Login</Link>
                                            <Link className='me-3 text-decoration-none ' to='/register'>Register</Link>
                                        </>
                                }
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;