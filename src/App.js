import React, { useState } from "react";
import ContractForm from "./components/ContractForm";
import ContractTable from "./components/ContractTable";
import ContractFilter from "./components/ContractFilter";
import { contracts, clients } from "./components/data";

const App = () => {
  const [filteredContracts, setFilteredContracts] = useState(contracts);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    let filteredData = contracts;

    if (filterValue) {
      filteredData = contracts.filter(
        (contract) => contract.client === filterValue
      );
    }
    setFilteredContracts(filteredData);
  };

  return (
    <div className="App">
      <h1>Contract Management System</h1>
      <ContractForm />
      <ContractFilter
        clients={clients}
        handleFilterChange={handleFilterChange}
      />
      <ContractTable contracts={filteredContracts} />
    </div>
  );
};

export default App;
