import React from "react";

const KeywordButton = ({
  category,
  categorybgColor,
  categoryGridArea,
  onClick,
  selectedButton,
}) => {
  return (
    <button
      style={{
        // height/width/margin, page MC
        height: "100px",
        width: "100px",
        margin: "auto",
        borderRadius: "50%",
        border: "2px solid #1d3336",
        backgroundColor: categorybgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#1e3236",
        padding: "1rem",
        fontWeight: "800",
        outline: "none",
        gridArea: categoryGridArea,
        WebkitBoxShadow: selectedButton && " 0 0 15px #51cbee",
        zIndex: "1",
      }}
      value={category}
      onClick={onClick}
    >
      {category}
    </button>
  );
};

export default KeywordButton;
