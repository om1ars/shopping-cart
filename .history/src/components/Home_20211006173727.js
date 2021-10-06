import React from 'react'
import { Filter } from './Filter'
import './styles.css'

export const Home = () => {
    const {
        state: {products},
    } = CartS
    return (
        <div>
            <Filter />
        </div>
    )
}
