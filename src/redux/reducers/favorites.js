const initialState = {
   items: [],
};

function favorites(state = initialState, action) {
   switch (action.type) {
      case "ADD_CLOTHES_TO_FAVORITES":
         return {
            ...state,
            items: [action.payload, ...state.items],
         };

      case "REMOVE_CLOTHES_FROM_FAVORITES":
         return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload),
         };

      default:
         return state;
   }
}

export default favorites;
