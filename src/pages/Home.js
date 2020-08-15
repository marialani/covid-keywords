import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: #d9e9f6;
  width: 100%;
  //   flex-grow: 1;
  //   flex-grow: 1;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
`;

const Section = styled.div`
  background: linear-gradient(#82b6dd, #1e3236);
  width: 100%;
  min-height: 30vh;
`;

const Button = styled(Link)`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#EE7155" : "white")};
  color: ${(props) => (props.primary ? "white" : "#EE7155")};
  font-size: 1em;
  font-weight: 550;
  display: inline-block;
  margin: auto;
  padding: 0.25em 1em;
  border: 2px solid #ee7155;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  position: relative;
  transition: all 0.5s;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    /*   top: 50%;
    transform: translate(-50%,-50%) */
    right: 0.7rem;
    transition: 0.5s;
  }

  &:hover {
    padding-right: 1.5rem;
    padding-left: 0.5rem;
  }

  &:hover:after {
    opacity: 1;
    right: 0.7rem;
  }
  //   width: 100px;
`;

const Img = styled.img`
  width: 50%;
  height: auto;
`;

const H1 = styled.h1`
  //   width: 70%;
  //   margin: auto;
  color: whitesmoke;
  display: inline;
  font-size: 3rem;
  margin: 1rem 0;
  font-family: "Montserrat", sans-serif;
  //   font-size: 15vh;
  -webkit-text-stroke: 1px #1e3236;
`;

const Home = () => {
  return (
    <Div
      style={{
        height: "88.5vh",
        // calc 100 - header and footer heights
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <Img
          src="https://i.pinimg.com/originals/ec/ec/36/ecec3687a972a20d8ba953b7f1bf4e43.gif"
          alt="mobile phone"
        />
        <div>
          <H1>Covid Keywords</H1>
          <div style={{ color: "#1e3236", textAlign: "center" }}>
            <h2 style={{ color: "#EE7155" }}>LOREM IPSUM &bull; DOLOR SIT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2rem",
            }}
          >
            <Button to="/">RESEARCH</Button>
            <Button primary to="keywords">
              KEYWORDS
            </Button>
          </div>
        </div>
      </div>
      <Section>
        <div style={{ height: "15vh", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#D9E9F6" }}
            ></path>
          </svg>
        </div>
      </Section>
    </Div>
  );
};

export default Home;
