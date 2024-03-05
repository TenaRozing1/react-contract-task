import React, { useState } from "react";
import ContractForm from "./components/ContractForm";
import ContractTable from "./components/ContractTable";
import ContractFilter from "./components/ContractFilter";
import Homepage from "./components/Homepage";
import {
  contracts,
  clients,
  addContract,
  deleteContract,
} from "./components/data";

const App = () => {
  const [userRole, setUserRole] = useState(null);
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
      {userRole === null ? (
        <Homepage setUserRole={setUserRole} />
      ) : (
        <>
          <h1>Contract Management System</h1>
          {userRole === "admin" && (
            <ContractForm
              clients={clients}
              handleAddContract={handleAddContract}
            />
          )}
          {userRole === "admin" && (
            <ContractFilter handleFilterChange={handleFilterChange} />
          )}
          <ContractTable
            contracts={filteredContracts}
            handleDeleteContract={
              userRole === "admin" ? handleDeleteContract : null
            }
            userRole={userRole}
          />
        </>
      )}
    </div>
  );
};

export default App;
