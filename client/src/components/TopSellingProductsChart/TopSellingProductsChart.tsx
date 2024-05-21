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

interface TopSellingProductsChartProps {
  topQuantity?: number;
}

const TopSellingProductsChart: React.FC<TopSellingProductsChartProps> = ({
  topQuantity = 5,
}) => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });
  const [legendData, setLegendData] = useState<
    { productName: string; color: string }[]
  >([]);

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

        // Generate unique colors for each bar
        const colors = sortedData.map(
          (_: any, index: number) =>
            `hsl(${(index * 360) / sortedData.length}, 70%, 50%)`
        );

        const legendData = sortedData.map((item: any, index: number) => ({
          productName: item.productName,
          color: colors[index],
        }));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "",
              data: quantities,
              backgroundColor: colors,
              borderColor: colors.map((color) => color.replace("70%", "50%")),
              borderWidth: 1,
            },
          ],
        });

        setLegendData(legendData);
      } catch (error) {
        console.error("Error fetching best selling products:", error);
      }
    };

    fetchData();
  }, [topQuantity]);

  return (
    <div className="chart-container">
      <h2>Top Selling Products</h2>
      <div className="legend-container">
        {legendData.map((item, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.productName}
          </div>
        ))}
      </div>
      <div className="chart-wrapper">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false, 
              },
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false, 
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default TopSellingProductsChart;
