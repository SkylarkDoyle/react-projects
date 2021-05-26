import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

var initialState =  {
  loading: false,
  cart: cartItems,
  total:0,
  amount:0
}



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  var clearCart = () => {
     dispatch({ type: 'CLEAR_CART' })
  }

  var remove = (id) => {
    dispatch({ type: 'REMOVE', item: id })
 }

 var increase = (id) => {
   dispatch({ type: 'INCREASE', item: id})
 }

 var decrease = (id) => {
  dispatch({ type: 'DECREASE', item: id})
}

var fetchData = async () => {
   dispatch({type: 'LOADING'})
   var response = await fetch(url)
   var cart = await response.json()
   dispatch({ type: 'DISPLAY_ITEMS', item: cart })
}

useEffect(() => {
  fetchData()
}, [])


useEffect(() => {
   dispatch({type: 'GET_TOTALS'})
}, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,

      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
