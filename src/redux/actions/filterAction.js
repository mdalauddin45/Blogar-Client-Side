import { TOGGLE_CATEGORY, } from "../actionTypes/actionTypes";


export const toggleBrand = (brandName) => {
    return {
        type: TOGGLE_CATEGORY,
        payload: brandName,
    };
}
