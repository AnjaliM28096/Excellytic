import { useState } from "react";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-page">
      <Navbar isAuthenticated={false} />
      <div className="auth-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              required
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>
          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
