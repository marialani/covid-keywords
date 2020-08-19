import React from "react";
import styled from "styled-components";
import demosLogo from "../assets/img/demos-light.jpg";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e3236;
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
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

const Nav = () => {
  return (
    <Div>
      {/* <NavItem to="/">HOME</NavItem>
      <NavItem to="/keywords">KEYWORDS</NavItem> */}
      <a
        href="https://demos.co.uk/"
        style={{ display: "contents", margin: "auto" }}
      >
        <Img src={demosLogo} alt="demos" />
      </a>
    </Div>
  );
};

export default Nav;
