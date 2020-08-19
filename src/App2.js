import React, { useState, useEffect } from "react";
import { data } from "./data/data";

// Pages
// import Home from "./pages/Home";
import Chart from "./components/Chart";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import KeywordButton from "./components/KeywordButton";
import ToggleButton from "./components/ToggleButton";
// import KeywordsList from "./pages/KeywordsList";

// setSelectDateRange((prevState) => ({
//   ...prevState,
//   start: value,
// }));

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
  Community: data.communityData,
  Democracy: data.democracyData,
  Education: data.educationData,
  Health: data.healthData,
  Homelife: data.homelifeData,
  Jobs: data.jobsData,
  Money: data.moneyData,
  Other: data.otherData,
  Tech: data.technologyData,
  Transport: data.transportData,
  CommunityDemocracy: data.communityDemocracyData,
  CommunityHomelife: data.communityHomelifeData,
  CommunityJobs: data.communityJobsData,
  CommunityMoney: data.communityMoneyData,
  CommunityOther: data.communityOtherData,
  CommunityTech: data.communityTechData,
  CommunityTransport: data.communityTransportData,
  CommunityHealth: data.communityHealthData,
  DemocracyHealth: data.democracyHealthData,
  DemocracyHomelife: data.democracyHomelifeData,
  DemocracyJobs: data.democracyJobsData,
  DemocracyMoney: data.democracyMoneyData,
  DemocracyOther: data.democracyOtherData,
  DemocracyTech: data.democracyTechData,
  DemocracyTransport: data.democracyTransportData,
  EducationHealth: data.educationHealthData,
  EducationHomelife: data.educationHomelifeData,
  EducationJobs: data.educationJobsData,
  EducationMoney: data.educationMoneyData,
  EducationOther: data.educationOtherData,
  HealthHomelife: data.healthHomelifeData,
  HealthMoney: data.healthMoneyData,
  HealthOther: data.homelifeOtherData,
  HomelifeJobs: data.homelifeJobsData,
  HomelifeMoney: data.homelifeMoneyData,
  HomelifeOther: data.homelifeOtherData,
  HomelifeTech: data.homelifeTechData,
  HomelifeTransport: data.homelifeTransportData,
  JobsMoney: data.jobsMoneyData,
  JobsOther: data.jobsOtherData,
  JobsTech: data.jobsTechData,
  MoneyOther: data.moneyOtherData,
  MoneyTech: data.moneyTechData,
  MoneyTransport: data.moneyTransportData,
  OtherTech: data.otherTechData,
  OtherTransport: data.otherTransportData,
};

function App() {
  const [category, setCategory] = useState("Community");
  const [chartData, setChartData] = useState(data.communityData);
  const [chartDataColor1, setDataChartColor1] = useState("rgb(238, 113, 85)");
  // const [chartDataColor2, setDataChartColor2] = useState("rgb(238, 113, 85)");
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

  let clicked = [];
  function handleClickTwo(e) {
    let target = e.target;
    if (!toggledData) {
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
    }
    // if (toggledData && toggledData.length < 2) {
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
    console.log(clicked, "clicked");
    // }
  }

  useEffect(() => {
    console.log(toggledData);
    if (toggledData && toggledData.length === 2) {
      const sortedCategories = toggledData.map((val) => val.category).sort();
      setChartData(
        categoryDataObject[sortedCategories[0] + "" + sortedCategories[1]]
      );
      setToggledData(null);
      console.log(chartData, "clicked");
    }
  }, [toggledData, chartData]);

  let keywordButtonClick = selectTwoCategories ? handleClickTwo : handleClick;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* change to header */}
      <Nav />
      <ToggleButton onClick={() => setSelectTwoCategories((value) => !value)} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "2.5%",
          backgroundColor: "#1E3236",
          // margin: "1rem 1rem",
        }}
      >
        {/* grid-row-start / grid-column-start / grid-row-end / grid-column-end */}
        <KeywordButton
          category="Community"
          categorybgColor="#ee7155"
          // categoryGridArea="2 / 1 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Community}
        />
        <KeywordButton
          category="Democracy"
          categorybgColor="#feebb3"
          // categoryGridArea="3 / 1 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Democracy}
        />
        <KeywordButton
          category="Education"
          categorybgColor="#bfc6cf"
          // categoryGridArea="4 / 1 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Education}
        />
        <KeywordButton
          category="Health"
          categorybgColor="#e0f1f8"
          // categoryGridArea="5 / 1 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Health}
        />
        {/* RENEW NORMAL COLOURS */}
        <KeywordButton
          category="Homelife"
          categorybgColor="orange"
          // categoryGridArea="6 / 1 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Homelife}
        />
        <KeywordButton
          category="Jobs"
          categorybgColor="orange"
          // categoryGridArea="2 / 7 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Jobs}
        />
        <KeywordButton
          category="Money"
          categorybgColor="orange"
          // categoryGridArea="3 / 7 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Money}
        />
        <KeywordButton
          category="Other"
          categorybgColor="orange"
          // categoryGridArea="4 / 7 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Other}
        />
        <KeywordButton
          category="Tech"
          categorybgColor="orange"
          // categoryGridArea="5 / 7 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Tech}
        />
        <KeywordButton
          category="Transport"
          categorybgColor="orange"
          // categoryGridArea="6 / 7 / span 1 / span 1"
          onClick={keywordButtonClick}
          selectedButton={selectedButton.Transport}
        />
      </div>
      <Chart
        data={chartData}
        chartDataColor1={chartDataColor1}
        chartGridArea="1 / 2 / span 7 / span 5"
        category={category}
      />
    </div>
  );
}
export default App;
