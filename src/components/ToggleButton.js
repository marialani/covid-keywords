import Toggle from "react-toggle";
import "react-toggle/style.css";
import React from "react";
import styled from "styled-components";

const P = styled.p`
  @media (max-width: 600px) {
    font-size: 0.75rem !important;
  }
`;

const ToggleButton = ({ onClick }) => {
  return (
    <label
      style={{
        backgroundColor: "#1E3236",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <P
        style={{
          color: "white",
          fontSize: "1.1rem",
          margin: "0 0.5rem",
          textAlign: "center",
        }}
      >
        Select two categories
      </P>
      <Toggle
        defaultChecked={false}
        icons={false}
        onClick={onClick}
        className="toggle"
      />
    </label>
  );
};

export default ToggleButton;
