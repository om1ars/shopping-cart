import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <p>Online Do</p>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
