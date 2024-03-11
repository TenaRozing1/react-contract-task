import React, { useState } from "react";
import ContractForm from "./components/contract-form/contract-form.component";
import ContractGrid from "./components/contract-table/contract-grid.component";
import ContractFilter from "./components/filter/contract-filter.component";
import Homepage from "./components/homepage/homepage.component";
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
      if (filterValue.trim() !== "") {
        filteredData = contracts.filter((contract) =>
          contract.client.toLowerCase().includes(filterValue.toLowerCase())
        );
      } else {
        filteredData = contracts;
      }
    }

    setFilteredContracts(filteredData);
  };

  const handleAddContract = (newContract) => {
    // addContract(newContract);
    setFilteredContracts([...filteredContracts, { ...newContract }]);
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
          {userRole === "admin" && (
            <ContractForm
              clients={clients}
              handleAddContract={handleAddContract}
            />
          )}
          {userRole === "admin" && (
            <ContractFilter handleFilterChange={handleFilterChange} />
          )}
          <ContractGrid
            contracts={filteredContracts}
            handleDeleteContract={
              userRole === "admin" ? handleDeleteContract : null
            }
            userRole={userRole}
            setUserRole={setUserRole}
          />
        </>
      )}
    </div>
  );
};

export default App;
