// import { Link } from "react-router-dom";

// const Navbar = ({ isAuthenticated }) => {
//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <Link to="/" className="logo-link">
//           <h1 className="logo">Excellytics</h1>
//         </Link>
//       </div>

//       <div className="nav-right">
//         {isAuthenticated ? (
//           <div className="file-upload-container">
//             <input type="file" id="file-upload" hidden />
//             <label htmlFor="file-upload" className="upload-btn">
//               📁 Upload Excel
//             </label>
//           </div>
//         ) : (
//           <div className="auth-buttons">
//             <Link to="/login" className="nav-btn">
//               Login
//             </Link>
//             <Link to="/signup" className="nav-btn signup-btn">
//               Signup
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src / components / Navbar.jsx;
import Reactform from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useRef } from "react";

const Navbar = ({ isAuthenticated }) => {
  const { setIsSidebarOpen } = useSidebar();
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button
          className="hamburger-btn"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          ☰
        </button>
        <h1 className="logo">Excellytics</h1>

        {isAuthenticated && (
          <div className="upload-section">
            <input
              type="file"
              ref={fileInputRef}
              hidden
              onChange={() => {
                /* Handle file upload */
              }}
            />
            <button onClick={handleUploadClick} className="upload-btn">
              📁 Upload
            </button>

            <div className="auth-buttons">
              <Link to="/login" className="nav-btn">
                Login
              </Link>
              <Link to="/signup" className="nav-btn signup-btn">
                Signup
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="nav-right">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="nav-btn">
              Login
            </Link>
            <Link to="/signup" className="nav-btn signup-btn">
              Signup
            </Link>
          </>
        ) : (
          <div className="user-menu">{/* Add user dropdown if needed */}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
