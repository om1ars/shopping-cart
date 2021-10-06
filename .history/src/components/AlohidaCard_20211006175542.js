import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";

export const AlohidaCard = ({ p }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={p.image} alt={p.name} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>SUM {p.price.split(".")}</span>
          </Card.Subtitle>
          {cart.some((prod) => prod.id === p.id) ? (
            <Button variant="danger" onClcik={() => dispatch({type: 'REMOVE_FROM_CART', payload: p,})}>Yo'q</Button>
          ) : (
            <Button variant="primary" onClick=dispatch({type: 'ADD_TO_CART', payload: p,})}>Ha</Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
