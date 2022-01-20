export const addClothesToCart = (clothesObj) => ({
   type: "ADD_CLOTHES_CART",
   payload: clothesObj,
});

export const removeCartItem = (id) => ({
   type: "REMOVE_CART_ITEM",
   payload: id,
});

export const plusCartItem = (id) => ({
   type: "PLUS_CART_ITEM",
   payload: id,
});

export const minusCartItem = (id) => ({
   type: "MINUS_CART_ITEM",
   payload: id,
});
