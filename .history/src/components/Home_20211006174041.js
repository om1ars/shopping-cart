import React from 'react'
import { Filter } from './Filter'
import './styles.css'

export const Home = () => {
    const {
        state: { products },
      } = CartState();
      console.log(state);

    // console.log(products);
    return (
        <div>
            <Filter />
        </div>
    )
}
