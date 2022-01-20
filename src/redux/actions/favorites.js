export const addClothesToFavorites = (clothesObj) => ({
   type: "ADD_CLOTHES_TO_FAVORITES",
   payload: clothesObj,
});

export const removeClothesFromFavorites = (id) => ({
   type: "REMOVE_CLOTHES_FROM_FAVORITES",
   payload: id,
});
