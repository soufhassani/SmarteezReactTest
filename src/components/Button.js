import React from "react";

const Button = (props) => {
  const { id, text, callback } = props;
  const clickHandler = (e) => {
    e.preventDefault();
    callback();
  };
  return (
    <button type="button" id={id} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
