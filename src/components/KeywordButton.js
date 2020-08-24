import React from "react";
import styled from "styled-components";

const Button = styled.button`
  @media (max-width: 600px) {
    font-size: 0.5rem !important;
  }
`;

const KeywordButton = ({
  category,
  categorybgColor,
  onClick,
  selectedButton,
}) => {
  return (
    <Button
      style={{
        margin: "0.25rem 1rem",
        borderRadius: "2rem",
        border: "2px solid #1d3336",
        backgroundColor: categorybgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#1e3236",
        padding: "0.3em 1.2em",
        fontWeight: "800",
        fontSize: "0.8rem",
        outline: "none",
        WebkitBoxShadow: selectedButton && "0px 0px 20px rgb(3 249 249)",
        zIndex: "1",
        textAlign: "center",
        cursor: "pointer",
      }}
      value={category}
      onClick={onClick}
    >
      {category.toUpperCase()}
    </Button>
  );
};

export default KeywordButton;
