import React from 'react';

const Button = (props) => {
  if (!props.text) {
    return null;
  }
  return (
    <button
      onClick={props.onClick}
      className="mb-2 rounded-lg bg-theme-primary px-4 py-1 text-center text-lg
                font-bold text-theme-darkLight focus:ring-4 lg:py-2"
    >
      {props.text}
    </button>
  );
};

export default Button;
