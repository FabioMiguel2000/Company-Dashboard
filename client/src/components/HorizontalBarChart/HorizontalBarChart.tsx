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
import "./HorizontalBarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface HorizontalBarChartProps {
  topQuantity?: number;
  endpoint: string;
  label: string;
  xField: string;
  yField: string;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  topQuantity = 5,
  endpoint,
  label,
  xField,
  yField
}) => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        const sortedData = data
          .sort((a: any, b: any) => b[yField] - a[yField])
          .slice(0, topQuantity);

        const labels = sortedData.map((item: any) => item[xField]);
        const values = sortedData.map((item: any) => item[yField]);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: label,
              data: values,
              backgroundColor: labels.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`),
              borderColor: "rgba(0,0,0,0.1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
      }
    };

    fetchData();
  }, [endpoint, topQuantity, xField, yField]);

  return (
    <div className="chart-container">
      <div className="legend-container">
        {chartData.labels.map((label: string, index: number) => (
          <div className="legend-item" key={index}>
            <span
              className="legend-color"
              style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
            ></span>
            {label}
          </div>
        ))}
      </div>
      <div className="chart-wrapper">
        <Bar
          data={chartData}
          options={{
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
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

export default HorizontalBarChart;
