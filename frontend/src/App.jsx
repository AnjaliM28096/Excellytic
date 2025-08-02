// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={<Dashboard isAuthenticated={isAuthenticated} />}
//         />
//         <Route
//           path="/login"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         <Route
//           path="/signup"
//           element={<Signup setIsAuthenticated={setIsAuthenticated} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import History from "./pages/History";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="background-wrapper background-overlay">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/analytics"
            element={<Analytics isAuthenticated={isAuthenticated} />}
          />
          <Route path="/reports" element={<Reports />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
