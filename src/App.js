import React from "react";
import ContractForm from "./components/ContractForm";
import ContractFilter from "./components/ContractFilter";
import ContractTable from "./components/ContractTable";

const App = () => {
  const contracts = [
    {
      contractName: "Contract 1",
      client: "John Doe",
      startDate: "2023-01-01",
      duration: 12,
      comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      contractName: "Contract 2",
      client: "Anne Hathaway",
      startDate: "2023-02-15",
      duration: 6,
      comments: "Alice in wonderland.",
    },
    {
      contractName: "Contract 3",
      client: "Celine Buch",
      startDate: "2024-01-05",
      duration: 24,
      comments: "This is not boring lorem ipsum text.",
    },
    {
      contractName: "Contract 4",
      client: "Severus Snape",
      startDate: "2024-01-05",
      duration: 24,
      comments: "Obviously.",
    },
    {
      contractName: "Contract 5",
      client: "Robin Hood",
      startDate: "2023-07-11",
      duration: 24,
      comments: "I live in Sherwood Forest.",
    },
  ];

  const clients = [
    "John Doe",
    "Anne Hathaway",
    "Celine Buch",
    "Severus Snape",
    "Robin Hood",
  ];

  const handleFilterChange = (e) => {
    // here comes filter logic
    console.log("Filter changed:", e.target.value);
  };

  return (
    <div className="App">
      <h1>
        CMS - It's Contract Managment System, not Content Managment System:D
      </h1>
      <ContractForm />
      <ContractFilter
        clients={clients}
        handleFilterChange={handleFilterChange}
      />
      <ContractTable contracts={contracts} />
    </div>
  );
};

export default App;
