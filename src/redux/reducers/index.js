import { combineReducers } from "redux";

import filters from "./filters";
import clothes from "./clothes";
import cart from "./cart";
import favorites from "./favorites";

const rootReducer = combineReducers({
   filters,
   clothes,
   cart,
   favorites,
});

export default rootReducer;
