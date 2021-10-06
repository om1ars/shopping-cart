// import Dropdown from '@restart/ui/esm/Dropdown'
import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <p>Online Do'kon</p>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{width: 500}} placeholder= 'Qidirish' className='m-auto' />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.To
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}
