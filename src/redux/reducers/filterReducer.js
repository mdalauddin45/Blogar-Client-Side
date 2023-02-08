import { TOGGLE_FIRST, TOGGLE_LAST } from "../actionTypes/actionTypes"

export const initialstate = {
    filters: {
        lastUploaded: [],
        firstUploaded: false,
    },
    keyboard: ""
}

const filterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case TOGGLE_FIRST:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    firstUploaded: [...state.filters.firstUploaded, action.payload]
                }
            }
        case TOGGLE_LAST:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    lastUploaded: [...state.filters.lastUploaded, action.payload]
                }
            }
        default:
            return state
    }
}

export default filterReducer