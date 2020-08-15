import React from "react";
import styled from "styled-components";
import demosLogo from "../assets/img/demos-light.jpg";

const Div = styled.div`
  background: #1e3236;
  width: 100%;
  height: 5vh;
`;

const Img = styled.img`
  width: auto;
  height: 55%;
`;

// const NavItem = styled(Link)`
//   color: white;
//   font-weight: bold;
//   text-decoration: none;
//   margin: 0 0.5rem;

//   &:hover {
//     color: #e45534;
//   }
// `;

const Footer = () => {
  return (
    <Div>
      {/* <NavItem to="/">HOME</NavItem> */}
      <a href="https://demos.co.uk/" style={{ display: "contents" }}>
        <Img src={demosLogo} alt="demos" />
      </a>
    </Div>
  );
};

export default Footer;
