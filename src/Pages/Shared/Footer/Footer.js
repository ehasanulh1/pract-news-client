import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container bg="light" className='text-center py-5'>
                <Card.Title>Pract News </Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Container>
        </div>
    );
};

export default Footer;