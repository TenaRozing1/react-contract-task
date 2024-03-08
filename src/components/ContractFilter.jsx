import React, { useState } from "react";

const ContractFilter = ({ handleFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleFilterChange("client", value);
  };

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by client name"
      />
    </form>
  );
};

export default ContractFilter;
