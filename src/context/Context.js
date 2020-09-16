import React , {createContext, useReducer} from 'react';
import initialState from './State';
import Reducer from './Reducer';
import Data from './Data';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    //Actions
    const addItems = (id) => {
        dispatch({
            type: 'ADD_ITEMS',
            payload: id,
        })
    }
    const removeItems = (id) => {
        dispatch({
            type: 'REMOVE_ITEMS',
            payload: id,
        })
    }
    const minusItems = (id) => {
        dispatch({
            type: 'MINUS_ITEMS',
            payload: id,
        })
    }
    const removeObjects = (id) => {
        dispatch({
            type: 'REMOVE_OBJECT',
            payload: id,
        })
    }
    const emptyCart = () => {
        dispatch({
            type: 'EMPTY_CART',
        })
    }
    return (
        <GlobalContext.Provider
            value={{
                cartCount : state.cartCount,
                cartItems : state.cartItems,
                Data : state.Data,
                addItems,
                emptyCart,
                removeItems,
                minusItems,
                removeObjects,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
