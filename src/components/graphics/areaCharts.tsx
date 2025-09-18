import React from "react";
import ReactApexChart from "react-apexcharts";
import { products } from "../../shared/data/products";
import { ProductInterface } from "../../shared/types";
import { ApexOptions } from "apexcharts";
import moment from "moment";


export const AreaCharts = () => {
  const [state] = React.useState<{
    series: {
      name: string;
      data: ProductInterface["monthlySales"];
    }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "PRODUCT A",
        data: products[0]?.monthlySales,
      },
      {
        name: "PRODUCT B",
        data: products[1]?.monthlySales,
      },
      {
        name: "PRODUCT C",
        data: products[2]?.monthlySales,
      },
    ],

    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#8e8da4",
          },
          offsetX: 0,
          formatter: function (val) {
            return (val / 1000000).toFixed(2);
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      xaxis: {
        type: "datetime",
        tickAmount: 8,
        min: new Date("01/01/2014").getTime(),
        max: new Date("01/20/2014").getTime(),
        labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: function (_, timestamp) {
            return moment(new Date(timestamp as number)).format("DD MMM YYYY");
          },
        },
      },
      title: {
        text: "Irregular Data in Time Series",
        align: "left",
        offsetX: 14,
      },
      tooltip: {
        shared: true,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetX: -10,
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
