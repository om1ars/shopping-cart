import React, {useContext, createContext, useReducer} from 'react'


const Cart = createContext();

export const Context = ({children}) => {
    const const
    return (
        <Cart.Provider>
            {children}
        </Cart.Provider>
     
    )
}
