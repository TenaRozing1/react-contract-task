import React, { useState } from "react";

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
    <div>
      <h1>Welcome to Contract Management System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={isAdmin}
            onChange={handleRoleChange}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="user"
            checked={!isAdmin}
            onChange={handleRoleChange}
          />
          User
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Homepage;
