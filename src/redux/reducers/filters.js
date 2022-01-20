const initialState = {
   filterBy: 0,
   sortBy: {
      type: "popular",
      order: "desc",
   },
};

function filters(state = initialState, action) {
   switch (action.type) {
      case "SET_FILTER_BY": {
         return {
            ...state,
            filterBy: action.payload,
         };
      }

      case "SET_SORT_BY": {
         return {
            ...state,
            sortBy: action.payload,
         };
      }

      default:
         return state;
   }
}

export default filters;
