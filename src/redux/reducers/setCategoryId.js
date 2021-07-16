import * as types from "../types";

const initialState = {
  categoryId : ''
};

const setCategoryIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CATEGORY_ID:
      return {
        ...state,
        categoryId : action.categoryId
      }

    default:
      return state;
  }
};

export default setCategoryIdReducer;
