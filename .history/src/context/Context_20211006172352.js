import React, {useContext, createContext, useReducer} from 'react'


const Cart = createContext();

export const Context = ({children}) => {
    const prod
    return (
        <Cart.Provider>
            {children}
        </Cart.Provider>
     
    )
}
