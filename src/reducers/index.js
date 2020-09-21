import { combineReducers } from "redux";

import { defaultProductsReducer } from "./defaultProductsReducer.js";
import { dialogReducer } from "./dialogReducer.js";
import { selectedProductsReducers } from "./selectedProductsReducer.js";

const rootReducers = combineReducers({
    defaultProducts: defaultProductsReducer,
    dialog: dialogReducer,
    selectedProducts: selectedProductsReducers,
});

export default rootReducers;
