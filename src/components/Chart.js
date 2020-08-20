import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Chart = ({
  data,
  chartDataColor1,
  chartDataColor2,
  chartGridArea,
  category,
}) => {
  // const chartDataColor = chartDataColor2
  //   ? `"linear-gradient(to right, ${chartDataColor2}, ${chartDataColor2})"`
  //   : chartDataColor1;

  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    x.fontFamily = "Courier New";
    let series = x.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.angles = [0];
    series.randomness = 0.4;
    // series.accuracy = 0;
    series.rotationThreshold = 0;

    series.data = data;
    series.dataFields.word = "tag";
    series.dataFields.value = "count";

    if (chartDataColor2 !== null) {
      series.heatRules.push({
        target: series.labels.template,
        property: "fill",
        min: am4core.color(chartDataColor1),
        max: am4core.color(chartDataColor2),
        dataField: "value",
      });
    } else {
      series.heatRules.push({
        target: series.labels.template,
        property: "fill",
        min: am4core.color(chartDataColor1),
        max: am4core.color(chartDataColor1),
        dataField: "value",
      });
    }

    // series.labels.template.url = "tagged/{word}";
    // series.labels.template.urlTarget = "_blank";

    series.labels.template.tooltipText = "{word}\n[bold]{value}[/]";

    // let subtitle = x.titles.create();
    // subtitle.text = `"Subtitle: Keywords for ${category}"`;
    // subtitle.marginTop = 10;

    // let title = x.titles.create();
    // title.text = '"Keywords"';
    // title.marginTop = 20;
    // title.fontSize = 40;
    // title.fontWeight = "800";
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [data, chartDataColor1, chartDataColor2, category]);
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
