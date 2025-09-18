import { Box, Grid, Paper } from "@mui/material";
import { CardGraphics } from "../components/card";
import { ColumnCharts, LineCharts, SimpleDonutCharts } from "../components/graphics";
import { getSalesSummary, getMonthlySalesData } from "../shared/data/products";

export const Dashboard = () => {
  const salesSummary = getSalesSummary();
  const monthlySalesData = getMonthlySalesData();
  return (
    <Box>
      <Paper elevation={0}>
        <Grid container spacing={3} marginY={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardGraphics
              title="Resumo de Vendas"
              color="bg-green-500"
              classTitle="text-white"
              classSubtitle="text-white"
              subtitle={salesSummary.totalSales.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardGraphics
              title="Produtos Mais Vendidos"
              color="bg-orange-500"
              classTitle="text-white"
              classSubtitle="text-white"
              subtitle={salesSummary.bestSellingProduct.name}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardGraphics
              title="Mês com Maior Vendas"
              color="bg-yellow-500"
              classTitle="text-white"
              classSubtitle="text-white"
              subtitle={
                monthlySalesData.months[monthlySalesData.months.length - 1]
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} marginBottom={2}>
          <Grid size={{ xs: 12, md: 5 }}>
            <CardGraphics title="Vendas por categoria">
              <SimpleDonutCharts />
            </CardGraphics>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <CardGraphics title="Periodo de vendas por categoria">
              <ColumnCharts />
            </CardGraphics>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 12 }}>
            <CardGraphics title="Periodo de vendas por categoria">
              <LineCharts  />
            </CardGraphics>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
