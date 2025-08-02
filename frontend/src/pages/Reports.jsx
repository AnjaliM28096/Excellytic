// src/pages/Reports.jsx
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Reports = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Sales Report Q1",
      type: "line",
      date: "2024-03-15",
      data: {
        labels: ["Jan", "Feb", "Mar"],
        values: [65000, 59000, 80000],
      },
    },
    {
      id: 2,
      title: "Customer Growth",
      type: "bar",
      date: "2024-03-14",
      data: {
        labels: ["2023", "2024"],
        values: [1200, 1850],
      },
    },
  ]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Generated Reports</h1>

        <div className="reports-grid">
          {reports.map((report) => (
            <div key={report.id} className="report-card">
              <div className="chart-container">
                {report.type === "line" ? (
                  <Line
                    data={{
                      labels: report.data.labels,
                      datasets: [
                        {
                          label: report.title,
                          data: report.data.values,
                          borderColor: "#42a5f5",
                          tension: 0.1,
                        },
                      ],
                    }}
                    options={{ responsive: true, maintainAspectRatio: false }}
                  />
                ) : (
                  <Bar
                    data={{
                      labels: report.data.labels,
                      datasets: [
                        {
                          label: report.title,
                          data: report.data.values,
                          backgroundColor: "#42a5f5",
                        },
                      ],
                    }}
                    options={{ responsive: true, maintainAspectRatio: false }}
                  />
                )}
              </div>

              <div className="report-meta">
                <h3>{report.title}</h3>
                <p>Generated: {new Date(report.date).toLocaleDateString()}</p>
                <div className="report-actions">
                  <button className="download-btn">Download PDF</button>
                  <button className="share-btn">Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
