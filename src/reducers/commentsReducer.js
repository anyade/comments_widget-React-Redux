"use strict";

import data from "../data/data";
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  LIKE_COMMENT
} from "../actions/actionTypes";

const comments = localStorage.comments
  ? JSON.parse(localStorage.getItem("comments"))
  : data;

const commentsReducer = (state = comments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];

    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.payload);

    case LIKE_COMMENT:
      return state.map(comment =>
        comment.id === action.payload
          ? { ...comment, likes: ++comment.likes }
          : comment
      );

    default:
      return state;
  }
};

export default commentsReducer;
