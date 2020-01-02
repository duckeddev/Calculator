import React from "react";

const ViewPanel = ({ result }) => {
  return (
    <input
      type="text"
      readOnly
      value={result}
      style={{
        textAlign: `right`,
        width: `320px`,
        padding: `.3em .8em`,
        fontSize: `1.4rem`,
        fontFamily: `'Audiowide', cursive`,
        background: `transparent`,
        border: `2px solid #fff`,
        borderRadius: `10px`,
        color: `#fff`,
        marginBottom: `.3rem`,
        boxSizing: `border-box`
      }}
    />
  );
};

export default ViewPanel;
