import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { products } from "../../shared/data/products";

export const SimpleDonutCharts = () => {
  const [state] = React.useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: products.map((product) => product.totalSales),
    options: {
      chart: {
        height: 212,
        type: "pie",
      },
      labels: products.map((product) => product.category),
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
          position: "right",
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
        }
      }]

    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type={state.options?.chart?.type}
        height={state.options?.chart?.height}
      />
    </div>
  );
};
