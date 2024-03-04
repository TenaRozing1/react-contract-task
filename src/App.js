import React, { useState, useEffect } from "react";
import ContractForm from "./components/ContractForm";
import ContractTable from "./components/ContractTable";
import ContractFilter from "./components/ContractFilter";
import { contracts, clients, addContract, deleteContract } from "./components/data";

const App = () => {
  const [filteredContracts, setFilteredContracts] = useState(contracts);

  const handleFilterChange = (filterType, filterValue) => {
    let filteredData = [];

    if (filterType === "client") {
      filteredData = contracts.filter(
        (contract) => contract.client === filterValue
      );
    } else if (filterType === "duration") {
      filteredData = contracts.filter(
        (contract) => contract.duration === parseInt(filterValue)
      );
    } else if (filterType === "latest") {
      filteredData = contracts.slice(-3);
    }

    setFilteredContracts(filteredData);
  };

  const handleAddContract = (newContract) => {
    addContract(newContract);
    setFilteredContracts([...filteredContracts, newContract]);
  };

  const handleDeleteContract = (id) => {
    deleteContract(id);
    setFilteredContracts(
      filteredContracts.filter((contract) => contract.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>Contract Management System</h1>
      <ContractForm clients={clients} handleAddContract={handleAddContract} />
      <ContractFilter handleFilterChange={handleFilterChange} />
      <ContractTable
        contracts={filteredContracts}
        handleDeleteContract={handleDeleteContract}
      />
    </div>
  );
};

export default App;
