import React, { useState } from "react";
import "./homepage.styles.scss";

const Homepage = ({ setUserRole }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleRoleChange = (e) => {
    setIsAdmin(e.target.value === "admin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserRole(isAdmin ? "admin" : "user");
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to Contract Management System</h1>
      <form className="homepage-form" onSubmit={handleSubmit}>
        <label className="form-label">
          <input
            type="radio"
            id="Color"
            name="role"
            value="admin"
            checked={isAdmin}
            onChange={handleRoleChange}
          />
          Admin
        </label>
        <label className="form-label">
          <input
            type="radio"
            id="Color"
            name="role"
            value="user"
            checked={!isAdmin}
            onChange={handleRoleChange}
          />
          Regular User
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Homepage;
