// import Dropdown from '@restart/ui/esm/Dropdown'
import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa';

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
                        <Dropdown.Toggle variant='primary'>
                            <FaCartPlus color='white' fontSize="25px" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>0</Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}
