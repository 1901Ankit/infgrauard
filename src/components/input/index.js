import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      style={{
        width: props.width,
        height: props.height,
        padding: props.padding,
        border: props.border,
        backgroundColor: props.bg,
        borderRadius: props.rounded,
      }}
      onChange={props.onChange}
      maxLength={props.maxlength}
    />
  );
};

export default Input;
