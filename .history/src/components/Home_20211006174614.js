import React from 'react'
import { CartState } from '../context/Context'
// import { CartState } from '../context/Context'
import { Filter } from './Filter'
import './styles.css'

export const Home = () => {
    const {
        state: {products},
    } = CartState()

    return (
        <div className='home'>
            <Filter />
            <div className="productContainer">
                {products.map(())}
            </div>

           
        </div>
    )
}
