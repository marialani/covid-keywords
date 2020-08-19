import Toggle from "react-toggle";
import "react-toggle/style.css";
import React from "react";

const ToggleButton = ({ onClick }) => {
  return (
    <label>
      <Toggle defaultChecked={false} icons={false} onClick={onClick} />
    </label>
  );
};

export default ToggleButton;
