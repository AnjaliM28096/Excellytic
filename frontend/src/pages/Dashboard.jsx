// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Navbar isAuthenticated={true} />
//       <div className="dashboard-content">
//         <Sidebar />
//         <div className="main-content">
//           <h2>Analytics Dashboard</h2>
//           <div className="upload-section">
//             <input type="file" id="dashboard-upload" hidden />
//             <label htmlFor="dashboard-upload" className="upload-btn">
//               📁 Upload New File
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/pages/Dashboard.jsx

import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import FileUpload from "../components/FileUpload";
import DataPreview from "../components/DataPreview";

const Dashboard = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = (data) => {
    setFileData(data);
  };

  return (
    <>
      <Navbar isAuthenticated={true} />
      <Sidebar />
      <div className="main-content">
        <div className="dashboard-container">
          <Sidebar />
          <div className="main-content">
            <h1>Analytics Dashboard</h1>
            <FileUpload onUpload={handleFileUpload} />
            {fileData && <DataPreview data={fileData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// Update Dashboard.jsx and other pages
