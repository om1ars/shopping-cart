import React from 'react'
import { CartState } from '../context/Context'
import { Filter } from './Filter'
import './styles.css'

export const Home = () => {
    const {
        state: {products},
    } = CartState

    k
    return (
        <div>
            <Filter />
        </div>
    )
}
