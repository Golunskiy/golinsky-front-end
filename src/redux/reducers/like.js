const initialState = {
   items: {},
   liked: [],
}

const cart = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_TO_LIKE': {
         return {
            ...state,
            items: { ...state.items, [action.payload.id]: action.payload },
            liked: [...state.liked, action.payload.id],
         }
      }
      case 'DELETE_FROM_LIKE': {
         const newItems = { ...state.items }
         delete newItems[action.payload]

         const newLiked = [...state.liked]
         let indexDel = newLiked.indexOf(action.payload)
         if (indexDel >= 0) {
            newLiked.splice(indexDel, 1)
         }

         return {
            ...state,
            items: newItems,
            liked: newLiked,

         }
      }

      default:
         return state
   }

}

export default cart