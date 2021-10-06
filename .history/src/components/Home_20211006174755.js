import React from 'react'
import { CartState } from '../context/Context'
import { AlohidaCard } from './AlohidaCard'
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
                {products.map((p) => (
                    <AlohidaCard p={p} key={p.id}/>
                ))}
            </div>

           
        </div>
    )
}
