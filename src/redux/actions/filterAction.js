import { TOGGLE_BRAND, TOGGLE_CATEGORY, TOGGLE_STOCK } from "../actionTypes/actionTypes";


export const toggleBrand = (brandName) => {
    return {
        type: TOGGLE_CATEGORY,
        payload: brandName,
    };
}
