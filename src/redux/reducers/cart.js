const initialState = {
   bought: [],  // вже куплені
   willBeBought: {},
   opened: false,
   saved: [],  // в корзині
   totalPrice: 0,
}

const cart = (state = initialState, action) => {
   switch (action.type) {
      case 'IS_CART': {
         return {
            ...state,
            opened: action.payload
         }
      }
      case 'ADD_TO_CART': {
         return {
            ...state,
            willBeBought: { ...state.willBeBought, [action.payload.id]: action.payload },
            saved: [...state.saved, action.payload.id],
            totalPrice: state.totalPrice + action.payload.price
         }
      }
      case 'DELETE_FROM_CART': {
         const newWillBeBought = { ...state.willBeBought }
         delete newWillBeBought[action.payload.id]

         const newSaved = [...state.saved]
         let indexDel = newSaved.indexOf(action.payload.id)
         if (indexDel >= 0) {
            newSaved.splice(indexDel, 1)
         }

         return {
            ...state,
            willBeBought: newWillBeBought,
            saved: newSaved,
            totalPrice: state.totalPrice - action.payload.price

         }
      }
      case 'BUY': {
         return {
            ...state,
            bought: [
               ...state.bought,
               ...Object.values(state.willBeBought)
            ],
            willBeBought: {},
            saved: [],
            totalPrice: 0,
         }
      }
      // case 'CLEAR_CART': {     поки не реалізовано
      //    return {
      //       ...state,
      //       willBeBought: {},
      //       saved: [],
      //       totalPrice: 0,
      //    }
      // }

      default:
         return state
   }

}

export default cart