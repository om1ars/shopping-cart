export const AppReducer =  (state, action) =>  {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}

            case "REMOVE_FROM_CART":
                return 
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.)
            default:
                return state
    }
}