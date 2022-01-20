const initialState = {
   items: [],
   isLoaded: false,
};

function clothes(state = initialState, action) {
   switch (action.type) {
      case "SET_CLOTHES":
         return {
            ...state,
            items: action.payload,
            isLoaded: true,
         };

      case "SET_LOADED":
         return {
            ...state,
            isLoaded: action.payload,
         };

      default:
         return state;
   }
}

export default clothes;
