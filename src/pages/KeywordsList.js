import React from "react";
import KeywordCategories from "../components/KeywordCategories";
// import styled from "styled-components";

// const H1 = styled.h1`
//   width: 70%;
//   color: whitesmoke;
//   font-family: "Montserrat", sans-serif;
//   font-size: 2rem;
// `;
//   min-height: 10vh;
const KeywordsList = () => {
  return (
    <div>
      <h1>List of keywords</h1>
      <KeywordCategories />
    </div>
  );
};

export default KeywordsList;
