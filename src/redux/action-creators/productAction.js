import { ActioTypes } from "../contants/action-types";
export const setProducts = (products) => {
    return {
        type : ActioTypes.SET_PRODUCT,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type : ActioTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
export const removeSelectedProduct = () => {
    return {
      type: ActioTypes.REMOVE_SELECTED_PRODUCT,
    };
  };