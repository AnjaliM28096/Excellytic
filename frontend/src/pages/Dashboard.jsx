import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar isAuthenticated={true} />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <h2>Analytics Dashboard</h2>
          <div className="upload-section">
            <input type="file" id="dashboard-upload" hidden />
            <label htmlFor="dashboard-upload" className="upload-btn">
              📁 Upload New File
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
