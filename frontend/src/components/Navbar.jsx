import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <h1 className="logo">Excellytics</h1>
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/login" className="nav-btn">
          Login
        </Link>
        <Link to="/signup" className="nav-btn signup-btn">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
