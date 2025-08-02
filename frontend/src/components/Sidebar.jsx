// // import React from "react";
// // import { NavLink } from "react-router-dom";

// // const Sidebar = () => {
// //   return (
// //     <div className="sidebar">
// //       <nav>
// //         <ul>
// //           <li>
// //             <NavLink to="/home">Home</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/analytics">Analytics</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/reports">Reports</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/history">History</NavLink>
// //           </li>
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// // src/components/Sidebar.jsx

// // import { NavLink } from "react-router-dom";

// // const Sidebar = () => {
// //   return (
// //     <div className="sidebar">
// //       <div className="logo">Excellytics</div>
// //       <nav>
// //         <ul>
// //           <li>
// //             <NavLink to="/" exact="true">
// //               Home
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/analytics">Analytics</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/reports">Reports</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/history">History</NavLink>
// //           </li>
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };
// // export default Sidebar;

// // src/components/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//       <div className="sidebar-header">
//         <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
//           ☰
//         </button>
//         {isOpen && <h2 className="logo">Excellytics</h2>}
//       </div>

//       <nav className="sidebar-nav">
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               exact="true"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               {isOpen ? "Home" : "🏠"}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/analytics"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               {isOpen ? "Analytics" : "📊"}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/reports"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               {isOpen ? "Reports" : "📄"}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/history"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               {isOpen ? "History" : "🕒"}
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" exact="true">
              🏠 Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics">📊 Analytics</NavLink>
          </li>
          <li>
            <NavLink to="/reports">📄 Reports</NavLink>
          </li>
          <li>
            <NavLink to="/history">🕒 History</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
