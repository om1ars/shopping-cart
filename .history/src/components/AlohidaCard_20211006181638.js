import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../context/Context'

export const AlohidaCard = ({p}) => {

    const {
        state: {cart},
        dispatch,
    } = CartState()
    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={p.image} alt={p.name} />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>SUM {p.price.split(".")}</span>
                    </Card.Subtitle>
                   
                </Card.Body>
            </Card>
        </div>
    )
}




// <Button vairant='danger'>Yo'q</Button>
// <Button vairant='primary'>Yo'q</Button>