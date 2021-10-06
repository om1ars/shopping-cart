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
                name='group1'
                type='radio'
                id={`inline-1`}
                />
            </span>
            <span>
                <Form.Check 
                inline
                label='Eng yomonlari'
                name='group1'
                type='radio'
                id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check 
                inline
                label='Yangi mahsulotlarni ham qsh                '
                name='group1'
                type='radio'
                id={`inline-2`}
                />
            </span>
        </div>
    )
}
