"use strict";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment, likeComment } from "../actions";

const Comment = props => {
  const { id, author, text, date, likes } = props.comment;
  return (
    <div className="history__comment comment">
      <p className="comment__author">{author}:</p>
      <p className="comment__text">{text}</p>
      <p className="comment__date-time">{date}</p>
      <button
        className="comment__btn comment__btn--delete"
        type="button"
        title="Удалить комментарий"
        onClick={() => props.deleteComment(id)}
      >
        Удалить комментарий
      </button>
      <div className="comment__wrapper">
        <button
          className="comment__btn comment__btn--like"
          onClick={() => props.likeComment(id)}
        >
          <svg
            className={likes > 0 ? "active" : "inactive"}
            viewBox="-1 -1 34 30.6"
          >
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </button>
        {likes > 0 && <p className="comment__like-count">{likes}</p>}
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  }),
  deleteComment: PropTypes.func.isRequired,
  likeComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { likeComment, deleteComment }
)(Comment);
