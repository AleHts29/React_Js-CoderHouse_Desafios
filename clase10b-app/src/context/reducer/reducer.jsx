export const initialState = {
    basket:[]
}

export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_ITEM: 'REMOVE_ITEM'
}

// Funcion para calcular el monto total de todos los productos (usando metodo reduce)
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, ppp) =>  ppp.price + amount, 0)
    // console.log(total);

}


const reducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
        case 'REMOVE_ITEM':
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket];
            if (index >= 0){
                newBasket.splice(index, 1)
            }else {console.log('Can´t remove product')}
            
            return {
                ...state,
                basket: newBasket,
            }
        default: state;
    }
}

export default reducer