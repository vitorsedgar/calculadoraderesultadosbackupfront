import { types } from "./types.js";

const initialState = {
    error: false,
    loading: false,
    data: {
        products: [],
        result: "",
    },
};

export const selectedProductsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.PUSH_TO_SHEET:
            return {
                ...state,
                data: {
                    ...state.data,
                    products: [...state.data.products, action.value],
                },
            };
        case types.START_CALCULATE:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case types.FINISH_CALCULATE:
            return {
                ...state,
                loading: false,
                error: false,
                data: {
                    ...state.data,
                    result: action.value,
                },
            };
        case types.ERROR_CALCULATE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case types.RESET_CALC:
            return {
                ...state,
                data: {
                    ...state.data,
                    result: "",
                },
            };
        default:
            return { ...state };
    }
};
