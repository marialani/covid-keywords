import React, { useState, useEffect } from "react";
import { data } from "./data/data";

// Components
import Chart from "./components/Chart";
import Nav from "./components/Nav";
import KeywordButton from "./components/KeywordButton";
import ToggleButton from "./components/ToggleButton";

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
  let [chartDataColor1, setDataChartColor1] = useState("rgb(238, 113, 85)");
  const [chartDataColor2, setDataChartColor2] = useState(null);
  const [selectedButton, setSelectedButton] = useState(buttonFocus);
  const [selectTwoCategories, setSelectTwoCategories] = useState(false);
  const [toggledData, setToggledData] = useState(null);

  useEffect(() => {
    setSelectedButton({
      ...buttonFocus,
      Community: true,
    });
  }, []);

  function handleClick(e) {
    let target = e.target;
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
      setSelectedButton({
        ...buttonFocus,
        [target.value]: true,
      });
      chartDataColor1 = target.style.backgroundColor;
    }
    if (toggledData) {
      setSelectedButton({
        ...toggledData,
        ...selectedButton,
        [target.value]: true,
      });
      setDataChartColor2(target.style.backgroundColor);
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
      <Nav />
      <ToggleButton onClick={() => setSelectTwoCategories((value) => !value)} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0.5rem 1rem",
          backgroundColor: "#1E3236",
          maxWidth: "1024px",
          alignSelf: "center",
        }}
      >
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
          category="Health"
          categorybgColor="#83CCD3"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Health}
        />
        <KeywordButton
          category="Homelife"
          categorybgColor="darkgoldenrod"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Homelife}
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
          category="Tech"
          categorybgColor="deepskyblue"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Tech}
        />
        <KeywordButton
          category="Transport"
          categorybgColor="darkseagreen"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Transport}
        />
        <KeywordButton
          category="Other"
          categorybgColor="lightsalmon"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Other}
        />
      </div>
      <Chart
        data={chartData}
        chartDataColor1={chartDataColor1}
        chartDataColor2={chartDataColor2}
        category={category}
      />
    </div>
  );
}
export default App;
