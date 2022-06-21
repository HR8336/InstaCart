import { ActioTypes } from "../contants/action-types"

const intialState = {
    products : [],   
}

export const productReducer = (state = intialState , {type, payload}) => {
        switch(type){
            case ActioTypes.SET_PRODUCT:
                return {...state , products:payload};
                default:
                    return state;
        }
}


export const selectedProductReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActioTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActioTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };