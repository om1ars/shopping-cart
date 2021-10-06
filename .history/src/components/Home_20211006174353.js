import React from 'react'
import { CartState } from '../context/Context'
// import { CartState } from '../context/Context'
import { Filter } from './Filter'
import './styles.css'

export const Home = () => {
    const {
        state: {products},
    } = CartState()

    // console.log(state);
    return (
        <div>
            <Filter />
            {products.map((p) => (
                log
            ))}
        </div>
    )
}
