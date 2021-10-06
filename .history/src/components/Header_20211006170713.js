import React from 'react'
import { Container, FormControl, Navbar } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <p>Online Do'kon</p>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{width: 500}} placeholder= 'Qidiruv' />
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}
