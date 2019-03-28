"use strict";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Comment from "./Comment";

const History = ({ comments }) => {
  let historyContainer = React.createRef();

  const updateLocalStorage = comments => {
    const serialArr = JSON.stringify(comments);
    localStorage.setItem("comments", serialArr);
  };

  useEffect(() => {
    historyContainer.current.scrollIntoView(false);
    updateLocalStorage(comments);
  }, [comments]);

  return (
    <section className="comments__comments-history history">
      <div className="main__container">
        <h2 className="visually-hidden">История комментариев</h2>
        <div className="history__container" ref={historyContainer}>
          {comments.map(item => (
            <Comment key={item.id} comment={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

History.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(History);
