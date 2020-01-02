import React, { useState } from "react";

const ButtonReset = ({ val, size = `40px`, height = `50px`, handleReset }) => {
  const [hovered, setHovered] = useState(false);
  const [value] = useState(val);
  const condition = hovered ? "#fff" : "transparent";
  const color = hovered ? "#764ba2" : "#fff";
  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);
  return (
    <button
      style={{
        width: `${size}`,
        height: `${height}`,
        background: `${condition}`,
        border: `2px solid #fff`,
        borderRadius: `15px`,
        color: `${color}`,
        fontSize: `1.5rem`,
        marginRight: `.1em`,
        outline: `none`
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleReset}
    >
      {value}
    </button>
  );
};

export default ButtonReset;
