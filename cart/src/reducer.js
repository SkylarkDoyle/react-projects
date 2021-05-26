

var reducer = (state, action) => {
   if(action.type === 'CLEAR_CART'){
       return { ...state, cart:[] }
   }

   if(action.type === 'REMOVE'){
        return { 
       ...state, 
      cart:state.cart.filter(
    (cartItem) => cartItem.id !== action.item )}
   }

   if(action.type === 'INCREASE'){
       var tempCart = state.cart.map((cartItem) => {
       if(cartItem.id === action.item){
             return {...cartItem, amount: cartItem.amount + 1}
           }
           return cartItem
       })
       return {
           ...state,
           cart: tempCart
       }
   }

   if(action.type === 'DECREASE'){
    var tempCart = state.cart.map((cartItem) => {
    if(cartItem.id === action.item){
          return {...cartItem, amount: cartItem.amount - 1}
        }
        return cartItem
    }).filter((cartItem) => cartItem.amount !== 0)
    return {
        ...state,
        cart: tempCart
    }
}
  if(action.type === 'GET_TOTALS'){
      var {total, amount} = state.cart.reduce(
          (cartTotal, cartItem) => {
          var {price, amount} = cartItem
          var itemTotal = price * amount
          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
      }, {
           total: 0,
           amount: 0
      })
      total = parseFloat(total.toFixed(2))

      return {...state, total, amount}
  }
    if(action.type === 'LOADING'){
        return {...state, loading: true}
    }

    if(action.type === 'DISPLAY_ITEMS'){
        return {...state, cart:action.item, loading: false}
    }
   return state
}


export default reducer