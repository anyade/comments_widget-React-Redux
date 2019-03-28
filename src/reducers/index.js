"use strict";

import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
  comments: commentsReducer,
  comment: commentReducer
});
