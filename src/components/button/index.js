import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        style={{
          height: props.height,
          width: props.width,
          margin: props.margin,
          margin:props.marginbottom,
          margin:props.marginleft,
          padding: props.padding,
          color: props.color,
          backgroundColor: props.bg,
          textDecoration: props.textDecoration,
          border: props.border,
          fontSize: props.fs,
          fontWeight: props.fw,
          textTransform: props.textTransform,
          transition: props.transition || '',
        }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button
