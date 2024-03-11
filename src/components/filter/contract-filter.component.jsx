import React, { useState } from "react";
import styles from "./contract-filter.module.css";

const ContractFilter = ({ handleFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleFilterChange("client", value);
  };

  return (
    <>
      <h1 className={styles.searchTitle}>
        Here you can search contracts by client name:
      </h1>
      <form className={styles.inputContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search by client name"
          className={styles.inputField}
        />
      </form>
    </>
  );
};

export default ContractFilter;
