import React from "react";

const Button = (props) => {
  const { id, text, callback } = props;
  
  return (
    <button type="button" id={id} onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
