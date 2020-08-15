import React, { useState } from "react";
import { data } from "./data/data";

// Pages
// import Home from "./pages/Home";
import Chart from "./components/Chart";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import KeywordsCategories from "./components/KeywordCategories";
// import KeywordsList from "./pages/KeywordsList";

function App() {
  const [category, setCategory] = useState("Community");
  const [chartData, setChartData] = useState(data.communityData);
  const [chartDataColor, setDataChartColor] = useState("rgb(238, 113, 85)");

  const categoryDataObject = {
    Community: data.communityData,
    Democracy: data.democracyData,
    Education: data.communityData,
    Health: data.communityData,
    Homelife: data.communityData,
    Jobs: data.communityData,
    Money: data.communityData,
    Other: data.communityData,
    Tech: data.communityData,
    Transport: data.communityData,
  };

  function handleClick(e) {
    console.log(e.target.style.backgroundColor);
    setDataChartColor(e.target.style.backgroundColor);
    setChartData(categoryDataObject[e.target.value]);
    setCategory(e.target.value);
  }

  return (
    <div>
      {/* change to header */}
      <Nav />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gridTemplateRows: "repeat(7,1fr)",
          gridGap: "1rem",
          height: "94vh",
          // margin: "1rem 1rem",
        }}
      >
        {/* grid-row-start / grid-column-start / grid-row-end / grid-column-end */}
        <KeywordsCategories
          category="Community"
          categorybgColor="#ee7155"
          categoryGridArea="2 / 1 / span 1 / span 1"
          onClick={handleClick}
        />
        <KeywordsCategories
          category="Democracy"
          categorybgColor="#feebb3"
          categoryGridArea="3 / 1 / span 1 / span 1"
          onClick={handleClick}
        />
        <KeywordsCategories
          category="Education"
          categorybgColor="#bfc6cf"
          categoryGridArea="4 / 1 / span 1 / span 1"
          onClick={handleClick}
        />
        <KeywordsCategories
          category="Health"
          categorybgColor="#e0f1f8"
          categoryGridArea="5 / 1 / span 1 / span 1"
          onClick={handleClick}
        />
        {/* RENEW NORMAL COLOURS */}
        <KeywordsCategories
          category="Homelife"
          categorybgColor="orange"
          categoryGridArea="6 / 1 / span 1 / span 1"
          onClick={handleClick}
        />
        <Chart
          data={chartData}
          chartDataColor={chartDataColor}
          chartGridArea="1 / 2 / span 7 / span 5"
          category={category}
        />
        <KeywordsCategories
          category="Jobs"
          categorybgColor="orange"
          categoryGridArea="2 / 7 / span 1 / span 1"
          onClick={handleClick}
        />
        <KeywordsCategories
          category="Money"
          categorybgColor="orange"
          categoryGridArea="3 / 7 / span 1 / span 1"
          onClick={handleClick}
        />
        <KeywordsCategories
          category="Other"
          categorybgColor="orange"
          categoryGridArea="4 / 7 / span 1 / span 1"
          onClick={handleClick}
        />
        <KeywordsCategories
          category="Tech"
          categorybgColor="orange"
          categoryGridArea="5 / 7 / span 1 / span 1"
          onClick={handleClick}
        />
        <KeywordsCategories
          category="Transport"
          categorybgColor="orange"
          categoryGridArea="6 / 7 / span 1 / span 1"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
export default App;
