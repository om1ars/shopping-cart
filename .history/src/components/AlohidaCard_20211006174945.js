import React from 'react'
import { Card } from 'react-bootstrap'

export const AlohidaCard = ({p}) => {
    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={p.image} alt={p.name} />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Subtitle style
                </Card.Body>
            </Card>
        </div>
    )
}
