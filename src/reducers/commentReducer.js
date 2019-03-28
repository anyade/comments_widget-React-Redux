"use strict";

import { CHANGE_AUTHOR, CHANGE_TEXT, CLEAR_FORM } from "../actions/actionTypes";

const initialState = {
  author: "",
  text: ""
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTHOR:
      return { ...state, author: action.payload };

    case CHANGE_TEXT:
      return { ...state, text: action.payload };

    case CLEAR_FORM:
      return { ...state, author: "", text: "" };

    default:
      return state;
  }
};

export default commentReducer;
