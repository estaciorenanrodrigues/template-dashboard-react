import { ProductInterface } from "../types";

export const products: ProductInterface[] = [
  {
    id: "1",
    name: "Smartphone Galaxy Pro",
    category: "Eletrônicos",
    monthlySales: [
      { month: "Janeiro", value: 12500 },
      { month: "Fevereiro", value: 11800 },
      { month: "Março", value: 14200 },
      { month: "Abril", value: 13600 },
      { month: "Maio", value: 15800 },
      { month: "Junho", value: 16200 },
      { month: "Julho", value: 14500 },
      { month: "Agosto", value: 13900 },
      { month: "Setembro", value: 15100 },
      { month: "Outubro", value: 16800 },
      { month: "Novembro", value: 17500 },
      { month: "Dezembro", value: 18900 },
    ],
    totalSales: 180800,
    averageMonthlySales: 15066.67,
  },
  {
    id: "2",
    name: "Notebook Gamer X1",
    category: "Informática",
    monthlySales: [
      { month: "Janeiro", value: 8500 },
      { month: "Fevereiro", value: 9200 },
      { month: "Março", value: 7800 },
      { month: "Abril", value: 9600 },
      { month: "Maio", value: 11200 },
      { month: "Junho", value: 10800 },
      { month: "Julho", value: 12400 },
      { month: "Agosto", value: 11800 },
      { month: "Setembro", value: 13200 },
      { month: "Outubro", value: 12800 },
      { month: "Novembro", value: 14500 },
      { month: "Dezembro", value: 15200 },
    ],
    totalSales: 131600,
    averageMonthlySales: 10966.67,
  },
  {
    id: "3",
    name: "Fone Bluetooth Premium",
    category: "Acessórios",
    monthlySales: [
      { month: "Janeiro", value: 3200 },
      { month: "Fevereiro", value: 3800 },
      { month: "Março", value: 4200 },
      { month: "Abril", value: 3600 },
      { month: "Maio", value: 4800 },
      { month: "Junho", value: 5200 },
      { month: "Julho", value: 4600 },
      { month: "Agosto", value: 4400 },
      { month: "Setembro", value: 5000 },
      { month: "Outubro", value: 5400 },
      { month: "Novembro", value: 5800 },
      { month: "Dezembro", value: 6200 },
    ],
    totalSales: 56200,
    averageMonthlySales: 4683.33,
  },
];

// Função para obter dados de vendas por mês (útil para gráficos)
export const getMonthlySalesData = () => {
  const months = products[0].monthlySales.map((sale: { month: string; value: number; }) => sale.month);
  
  return {
    months,
    datasets: products.map(product => ({
      name: product.name,
      data: product.monthlySales.map((sale: { value: number; }) => sale.value),
      total: product.totalSales,
      average: product.averageMonthlySales,
    })),
  };
};

// Função para obter resumo de vendas
export const getSalesSummary = () => {
  const totalSales = products.reduce((sum, product) => sum + product.totalSales, 0);
  const averageSales = totalSales / products.length;
  
  return {
    totalProducts: products.length,
    totalSales,
    averageSales,
    bestSellingProduct: products.reduce((best, current) => 
      current.totalSales > best.totalSales ? current : best
    ),
    worstSellingProduct: products.reduce((worst, current) => 
      current.totalSales < worst.totalSales ? current : worst
    ),
  };
};
