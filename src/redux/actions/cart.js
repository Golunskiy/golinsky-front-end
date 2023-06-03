export const openCart = (isOpen) => ({
  type: "IS_CART",
  payload: isOpen,
});

export const addToCart = (sneakersObj) => ({
  type: "ADD_TO_CART",
  payload: sneakersObj,
});

export const delFromCart = (sneakersObj) => ({
  type: "DELETE_FROM_CART",
  payload: sneakersObj,
});

export const buy = () => ({
  type: "BUY",
});
