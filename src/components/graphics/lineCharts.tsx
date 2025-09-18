import { useState } from "react";
import { Paper, Box, Grid } from "@mui/material";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { products } from "../../shared/data/products";
import { ProductInterface } from "../../shared/types";

interface LineChartsProps {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
}

export const LineCharts = () => {
  const [state] = useState<LineChartsProps>({
    series: products.map((product: ProductInterface) => ({
      name: product.name,
      data: product.monthlySales.map((sale: { value: number }) => sale.value),
    })),
    options: {
      chart: {
        type: "area",
        height: 190,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1,
        fill: {
          opacity: 0.5,
        },
      },
      grid: {
        show: false,
      },
      
      yaxis: {
        labels: {
          show: true,
          formatter: function (value: number) {
            return "R$ " + value.toLocaleString("pt-BR");
          },
        },
      },
      xaxis: {
        labels: {
          show: true,

          rotateAlways: true,
          style: {
            fontSize: "12px",
            fontWeight: "bold",
          },
        },
        type: "category",
        categories: products[0].monthlySales.map((sale: { month: string }) => sale.month),
        
      },
      legend: {
        show: true,
        position: "right",
        horizontalAlign: "center",
      },
      tooltip: {
        shared: true,
      },
    },
  });

  return (
    <Box>
      <Grid>
        <Paper elevation={0}>
          <Chart
            options={state.options}
            series={state.series}
            type={state.options?.chart?.type}
            height={state.options?.chart?.height}
          />
        </Paper>
      </Grid>
    </Box>
  );
};
