"use strict";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment, changeAuthor, changeText, clearForm } from "../actions";

const AddComment = props => {
  const { author, text } = props.comment;

  const checkInput = input => {
    let flag = false;
    if (input.trim()) flag = true;
    return flag;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const monthsNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ];

    const dateTime = new Date();
    const id = +dateTime;
    const comDate = dateTime.getDate();
    const month = monthsNames[dateTime.getMonth()];
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const date = `${comDate} ${month} ${year}, ${
      hours < 10 ? `0${hours}` : hours
    }:${minutes < 10 ? `0${minutes}` : minutes}`;

    props.addComment({
      id,
      author,
      text,
      date,
      likes: 0
    });

    props.clearForm();
  };

  const btnDisabled = checkInput(author) && checkInput(text) ? false : true;

  return (
    <section className="comments__add-comment add-comment">
      <div className="main__container">
        <h2 className="visually-hidden">Добавьте свой комментарий</h2>
        <form className="add-comment__form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="author"
            className="add-comment__author font"
            placeholder="Ваше имя"
            onChange={e => props.changeAuthor(e.currentTarget.value)}
            value={author}
          />
          <textarea
            id="text"
            rows="3"
            className="add-comment__text font"
            placeholder="Ваш комментарий..."
            onChange={e => props.changeText(e.currentTarget.value)}
            value={text}
          />
          <button
            className="add-comment__button font"
            type="submit"
            disabled={btnDisabled}
          >
            Добавить
          </button>
        </form>
      </div>
    </section>
  );
};

AddComment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  addComment: PropTypes.func.isRequired,
  changeAuthor: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    comment: state.comment
  };
};

export default connect(
  mapStateToProps,
  { addComment, changeAuthor, changeText, clearForm }
)(AddComment);
