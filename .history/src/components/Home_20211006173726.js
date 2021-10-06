import React from 'react'
import { Filter } from './Filter'
import './styles.css'

export const Home = () => {
    const {
        state: {products},
    } = Cart
    return (
        <div>
            <Filter />
        </div>
    )
}
