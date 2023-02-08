import { TOGGLE_BRAND, TOGGLE_CATEGORY, TOGGLE_STOCK } from "../actionTypes/actionTypes";


export const initialState = {
    filters: {
        categoris: [],

    },
    keyword: "",
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CATEGORY:
            if (!state.filters.categoris.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        categoris: [...state.filters.categoris, action.payload],
                    },
                };
            } else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        categoris: state.filters.categoris.filter(
                            (category) => category !== action.payload
                        ),
                    },
                };
            }

        default:
            return state;
    }
};