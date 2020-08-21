import Toggle from "react-toggle";
import "react-toggle/style.css";
import React from "react";

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
      <p
        style={{
          color: "white",
          fontSize: "1.1rem",
          margin: "0 0.5rem",
          textAlign: "center",
        }}
      >
        Select two categories
      </p>
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
