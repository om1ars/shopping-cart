import React from 'react'
import { Card, Bu } from 'react-bootstrap'

export const AlohidaCard = ({p}) => {
    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={p.image} alt={p.name} />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>SUM {p.price.split(".")}</span>
                    </Card.Subtitle>
                    <Button variant='danger' />
                </Card.Body>
            </Card>
        </div>
    )
}
