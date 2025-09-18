export interface DashboardItemInterface {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
  }

  export interface ProductInterface {
    id: string;
    name: string;
    category: string;
    monthlySales: {
      month: string;
      value: number;
    }[];
    totalSales: number;
    averageMonthlySales: number;
  }
  