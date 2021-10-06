import React, {useContext, createContext, useReducer} from 'react'


const Cart = createContext();

export const Context = ({children}) => {
    const products = [...Array(20)]
    return (
        <Cart.Provider>
            {children}
        </Cart.Provider>
     
    )
}
