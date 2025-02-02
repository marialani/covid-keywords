import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Chart = ({
  data,
  chartDataColor1,
  chartDataColorArr,
  chartGridArea,
  category,
}) => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    x.fontFamily = "Avenir";
    let series = x.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.angles = [0];
    series.randomness = 0.4;
    series.accuracy = 0;
    series.rotationThreshold = 0;
    series.maxFontSize = 120;

    series.data = data;
    series.dataFields.word = "tag";
    series.dataFields.value = "count";

    if (chartDataColorArr.length === 2) {
      series.heatRules.push({
        target: series.labels.template,
        property: "fill",
        min: am4core.color("rgb(238, 113, 85)"),
        max: am4core.color("rgb(238, 113, 85)"),
        dataField: "value",
      });
    } else {
      series.heatRules.push({
        target: series.labels.template,
        property: "fill",
        min: am4core.color("rgb(238, 113, 85)"),
        max: am4core.color("rgb(238, 113, 85)"),
        dataField: "value",
      });
    }

    series.labels.template.tooltipText = "{word}\n[bold]{value}[/]";
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [data, chartDataColor1, chartDataColorArr, category]);
  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "100%",
        gridArea: chartGridArea,
        flexGrow: "1",
        backgroundColor: "#1E3236",
      }}
    ></div>
  );
};
export default Chart;
