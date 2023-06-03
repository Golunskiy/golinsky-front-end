export const addToLike = (sneakersObj) => ({
   type: 'ADD_TO_LIKE',
   payload: sneakersObj,
})

export const delFromLike = (id) => ({
   type: 'DELETE_FROM_LIKE',
   payload: id,
})
