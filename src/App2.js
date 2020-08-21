import React, { useState, useEffect } from "react";
import { data } from "./data/data";
import styled from "styled-components";
// Components
import Chart from "./components/Chart";
// import Nav from "./components/Nav";
import KeywordButton from "./components/KeywordButton";
import ToggleButton from "./components/ToggleButton";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: "0.5rem 1rem";
  background-color: #1e3236;
  max-width: 1024px;
  align-self: center;
  @media (max-width: 330px) {
    justify-content: space-around;
  }
`;

const buttonFocus = {
  Community: false,
  Democracy: false,
  Education: false,
  Health: false,
  Homelife: false,
  Jobs: false,
  Money: false,
  Other: false,
  Tech: false,
  Transport: false,
};

const categoryDataObject = {
  ...data,
};

function App() {
  const [category, setCategory] = useState("Community");
  const [chartData, setChartData] = useState(data.Community);
  const [chartDataColor1, setDataChartColor1] = useState("rgb(238, 113, 85)");
  const [chartDataColorArr, setDataChartColorArr] = useState([]);
  const [selectedButton, setSelectedButton] = useState(buttonFocus);
  const [selectTwoCategories, setSelectTwoCategories] = useState(false);
  const [toggledData, setToggledData] = useState(null);
  const [tempColor, setTempColor] = useState(null);

  useEffect(() => {
    setSelectedButton({
      ...buttonFocus,
      Community: true,
    });
  }, []);

  function handleClick(e) {
    let target = e.target;
    setDataChartColorArr([]);
    setDataChartColor1(target.style.backgroundColor);
    setChartData(categoryDataObject[target.value]);
    setCategory(target.value);
    setSelectedButton({
      ...buttonFocus,
      [target.value]: true,
    });
  }

  function handleClickTwo(e) {
    let target = e.target;
    if (!toggledData) {
      setTempColor(target.style.backgroundColor);
      setSelectedButton({
        ...buttonFocus,
        [target.value]: true,
      });
    }
    if (toggledData) {
      setSelectedButton({
        ...toggledData,
        ...selectedButton,
        [target.value]: true,
      });
      setDataChartColorArr([tempColor, target.style.backgroundColor]);
    }
    setToggledData((toggledData) => {
      if (!toggledData) {
        return [
          {
            category: target.value,
            dataChartColor: target.style.backgroundColor,
          },
        ];
      } else {
        return [
          ...toggledData,
          {
            category: target.value,
            dataChartColor: target.style.backgroundColor,
          },
        ];
      }
    });
  }

  if (toggledData && toggledData.length === 2) {
    const sortedCategories = toggledData.map((val) => val.category).sort();
    setChartData(
      categoryDataObject[sortedCategories[0] + "" + sortedCategories[1]]
    );
    setToggledData(null);
  }

  function handleToggle() {
    setSelectTwoCategories((value) => !value);
    setSelectedButton(buttonFocus);
  }

  let keywordButtonClick = selectTwoCategories ? handleClickTwo : handleClick;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "rgb(30, 50, 54)",
      }}
    >
      {/* change to header */}
      {/* <Nav /> */}
      <ToggleButton onClick={handleToggle} />
      <Div>
        <KeywordButton
          category="Community"
          categorybgColor="#ee7155"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Community}
        />
        <KeywordButton
          category="Democracy"
          categorybgColor="#feebb3"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Democracy}
        />
        <KeywordButton
          category="Education"
          categorybgColor="#bfc6cf"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Education}
        />
        <KeywordButton
          category="Transport"
          categorybgColor="darkseagreen"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Transport}
        />
        <KeywordButton
          category="Homelife"
          categorybgColor="darkgoldenrod"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Homelife}
        />

        <KeywordButton
          category="Health"
          categorybgColor="#83CCD3"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Health}
        />
        <KeywordButton
          category="Tech"
          categorybgColor="deepskyblue"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Tech}
        />

        <KeywordButton
          category="Jobs"
          categorybgColor="darkorange"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Jobs}
        />

        <KeywordButton
          category="Money"
          categorybgColor="#e0f1f8"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Money}
        />
        <KeywordButton
          category="Other"
          categorybgColor="lightsalmon"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Other}
        />
      </Div>
      <Chart
        data={chartData}
        chartDataColor1={chartDataColor1}
        chartDataColorArr={chartDataColorArr}
        category={category}
      />
    </div>
  );
}
export default App;
