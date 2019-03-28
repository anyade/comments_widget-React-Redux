"use strict";

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  LIKE_COMMENT,
  CHANGE_AUTHOR,
  CHANGE_TEXT,
  CLEAR_FORM
} from "./actionTypes";

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
};

export const deleteComment = id => {
  return {
    type: DELETE_COMMENT,
    payload: id
  };
};

export const likeComment = id => {
  return {
    type: LIKE_COMMENT,
    payload: id
  };
};

export const changeAuthor = value => {
  return {
    type: CHANGE_AUTHOR,
    payload: value
  };
};

export const changeText = value => {
  return {
    type: CHANGE_TEXT,
    payload: value
  };
};

export const clearForm = () => {
  return {
    type: CLEAR_FORM
  };
};
