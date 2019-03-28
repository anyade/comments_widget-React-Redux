"use strict";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import History from "./History";
import AddComment from "./AddComment";

const App = ({ commentsCount }) => {
  const nounEnding = (n, titles) => {
    return titles[
      n % 10 == 1 && n % 100 != 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ];
  };

  const text = commentsCount
    ? `Всего ${commentsCount} ${nounEnding(commentsCount, [
        "комментарий",
        "комментария",
        "комментариев"
      ])}`
    : `Комментариев пока нет`;

  return (
    <div className="comments">
      <div className="comments__comments-total">
        <div className="main__container">{text}</div>
      </div>
      <AddComment />
      <History />
    </div>
  );
};

App.propTypes = {
  commentsCount: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    commentsCount: state.comments.length
  };
};

export default connect(mapStateToProps)(App);
