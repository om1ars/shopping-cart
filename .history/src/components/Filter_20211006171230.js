import React from 'react'
import { Form } from 'react-bootstrap'

export const Filter = () => {
    return (
        <div className='filter'>
            <span className="title">Tahlil jadvali</span>
            <span>
                <Form.Check 
                inline
                label='Eng yaxshilari'
                
                />
            </span>
        </div>
    )
}
