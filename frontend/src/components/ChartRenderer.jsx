// src/components/ChartRenderer.jsx
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartRenderer = ({ data }) => {
  const chartData = {
    labels: data[0],
    datasets: [
      {
        label: "Data Values",
        data: data.slice(1),
        backgroundColor: "#42a5f5",
      },
    ],
  };

  return <Bar data={chartData} />;
};
