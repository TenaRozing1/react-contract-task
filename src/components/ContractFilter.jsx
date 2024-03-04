import React, { useState } from "react";

const ContractFilter = ({ handleFilterChange }) => {
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "filterType") {
      setFilterType(value);
    } else {
      setFilterValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilterChange(filterType, filterValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="filterType" onChange={handleChange} required>
        <option value="">Select Filter</option>
        <option value="client">Client</option>
        <option value="duration">Duration</option>
        <option value="latest">Latest Three</option>
      </select>
      {filterType && (
        <input
          type={filterType === "duration" ? "number" : "text"}
          name="filterValue"
          value={filterValue}
          onChange={handleChange}
          placeholder={`Enter ${filterType}`}
          required
        />
      )}
      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default ContractFilter;
