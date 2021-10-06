// import Dropdown from '@restart/ui/esm/Dropdown'
import React from "react";
import { Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { CartState } from "../context/Context";
import { AiFillDelete } from 'react-icons/ai';


export const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <p>Online Do'kon</p>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Qidirish"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              <FaCartPlus color="white" fontSize="25px" /> {cart.length}
            </Dropdown.Toggle>
            <Dropdown.Menu fontSize="200px">{cart.length > 0 ? (
                <>
                {cart.map((prod) => (
                    <span className='cartItem'>
                        <img src={prod.image} alt="" />
                        <div className="cartDetail">
                            <span>{prod.name}</span>
                            <span>SUM{prod.price.split('.')}</span>
                        </div>
                        <AiFillDelete /
                    </span>
                ))}
                </>
            ) : (
                <p>Sabat bo'sh</p>
            )}</Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
