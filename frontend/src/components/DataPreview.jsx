// src/components/DataPreview.jsx
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const DataPreview = ({ data }) => {
  const [selectedX, setSelectedX] = useState("");
  const [selectedY, setSelectedY] = useState("");

  // Get headers from first row
  const headers = data[0] || [];
  const rows = data.slice(1, 6); // Show first 5 rows

  // Chart configuration
  const chartData = {
    labels: selectedX ? rows.map((row) => row[headers.indexOf(selectedX)]) : [],
    datasets: [
      {
        label: selectedY || "Select Y Axis",
        data: selectedY
          ? rows.map((row) => row[headers.indexOf(selectedY)])
          : [],
        backgroundColor: "#42a5f5",
        borderColor: "#1976d2",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="data-preview">
      <div className="preview-header">
        <h3>Data Preview (First 5 Rows)</h3>
        <div className="stats">
          <span>Columns: {headers.length}</span>
          <span>Rows: {data.length - 1}</span>
        </div>
      </div>

      <div className="axis-selectors">
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
      </div>

      <div className="preview-content">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedX && selectedY && (
          <div className="chart-preview">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default DataPreview;
