import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const AlohidaCard = ({p}) => {

    const {
        state: {cart},
        dispatch,
    } = Cart
    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={p.image} alt={p.name} />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>SUM {p.price.split(".")}</span>
                    </Card.Subtitle>
                    <Button variant='danger'>Yo'q</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
