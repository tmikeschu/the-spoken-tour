import React from 'react'

const Emoji = ({ emoji, ...rest }) => (
  <span
    {...rest}
    role="img"
    style={{
      ...rest.style,
      fontSize: "32px",
      cursor: rest.onClick ? "pointer" : "default",
    }}
  >
    {emoji}
  </span>
)

export default Emoji
