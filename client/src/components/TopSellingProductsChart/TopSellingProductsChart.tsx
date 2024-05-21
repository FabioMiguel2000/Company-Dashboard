import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./TopSellingProductsChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TopSellingProductsChart {
    topQuantity?: number;
}

const TopSellingProductsChart: React.FC<TopSellingProductsChart> = ({topQuantity = 5}) => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/products/best_selling"
        );
        const data = await response.json();

        const sortedData = data
          .sort((a: any, b: any) => b.totalQuantity - a.totalQuantity)
          .slice(0, topQuantity);

        const labels = sortedData.map((item: any) => item.productName);
        const quantities = sortedData.map((item: any) => item.totalQuantity);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Top Selling Products",
              data: quantities,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching best selling products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <h2>Top Selling Products</h2>
      <Bar
        data={chartData}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </div>
  );
};

export default TopSellingProductsChart;
