import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container className='text-center'>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Container>
        </div>
    );
};

export default Footer;