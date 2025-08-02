import { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Sidebar from "../components/Sidebar";

Chart.register(...registerables);

const Analytics = ({ data, isAuthenticated }) => {
  const [chartType, setChartType] = useState("bar");
  const [selectedX, setSelectedX] = useState("");
  const [selectedY, setSelectedY] = useState("");
  const [chartData, setChartData] = useState(null);

  // Get headers from data
  const headers = data?.[0] || [];
  const rows = data?.slice(1) || [];

  useEffect(() => {
    if (selectedX && selectedY && headers.length > 0) {
      const xIndex = headers.indexOf(selectedX);
      const yIndex = headers.indexOf(selectedY);

      const newData = {
        labels: rows.map((row) => row[xIndex]),
        datasets: [
          {
            label: `${selectedY} vs ${selectedX}`,
            data: rows.map((row) => parseFloat(row[yIndex])),
            backgroundColor: [
              "#42a5f5",
              "#4dd0e1",
              "#81c784",
              "#fff176",
              "#ff8a65",
            ],
            borderColor: "#1976d2",
            borderWidth: 1,
          },
        ],
      };

      setChartData(newData);
    }
  }, [selectedX, selectedY, data]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Data Analytics</h1>

        <div className="analytics-controls">
          <div className="chart-config">
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="chart-select"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
            </select>

            <select
              value={selectedX}
              onChange={(e) => setSelectedX(e.target.value)}
              className="axis-select"
            >
              <option value="">Select X Axis</option>
              {headers.map((header, index) => (
                <option key={index} value={header}>
                  {header}
                </option>
              ))}
            </select>

            {chartType !== "pie" && (
              <select
                value={selectedY}
                onChange={(e) => setSelectedY(e.target.value)}
                className="axis-select"
              >
                <option value="">Select Y Axis</option>
                {headers.map((header, index) => (
                  <option key={index} value={header}>
                    {header}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button
            className="download-btn"
            onClick={() => {
              /* Add download logic */
            }}
          >
            Export Chart
          </button>
        </div>

        <div className="chart-container">
          {!data ? (
            <div className="no-data">
              Upload an Excel file to begin analysis
            </div>
          ) : chartData ? (
            <>
              {chartType === "bar" && (
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: "top" },
                      title: {
                        display: true,
                        text: `${selectedY} vs ${selectedX}`,
                      },
                    },
                  }}
                />
              )}

              {chartType === "line" && (
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: "top" },
                      title: {
                        display: true,
                        text: `${selectedY} vs ${selectedX}`,
                      },
                    },
                  }}
                />
              )}

              {chartType === "pie" && (
                <Pie
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: "right" },
                      title: {
                        display: true,
                        text: selectedX,
                      },
                    },
                  }}
                />
              )}
            </>
          ) : (
            <div className="no-selection">
              Select axes to generate visualization
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
