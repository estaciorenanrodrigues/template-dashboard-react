import { products } from "../../shared/data/products"; 
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface ColumnChartsProps {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
}

export const ColumnCharts = () => {
  const [state] = React.useState<ColumnChartsProps>({
    series: products.map((product) => ({
      name: product.category,
      data: product.monthlySales.map((sale) => sale.value),
    })),

    options: {
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: products[0].monthlySales.map((sale) => sale.month),
      },
      yaxis: {
        title: {

        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: true,
        position: "right",
        horizontalAlign: "center",
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type={state.options?.chart?.type}
          height={state.options?.chart?.height}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
