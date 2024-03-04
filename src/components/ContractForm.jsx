import React, { useState } from "react";

const ContractForm = ({ clients, handleAddContract }) => {
  const [contractData, setContractData] = useState({
    contractName: "",
    client: "",
    startDate: "",
    duration: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContractData({ ...contractData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContract({
      id: Date.now(),
      ...contractData,
      duration: parseInt(contractData.duration),
    });
    setContractData({
      contractName: "",
      client: "",
      startDate: "",
      duration: "",
      comments: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="contractName"
        value={contractData.contractName}
        onChange={handleChange}
        placeholder="Contract Name"
        required
      />
      <select
        name="client"
        value={contractData.client}
        onChange={handleChange}
        required
      >
        <option value="">Select Client</option>
        {clients.map((client, index) => (
          <option key={index} value={client}>
            {client}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="startDate"
        value={contractData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        required
      />
      <input
        type="number"
        name="duration"
        value={contractData.duration}
        onChange={handleChange}
        placeholder="Duration (months)"
        required
      />
      <textarea
        name="comments"
        value={contractData.comments}
        onChange={handleChange}
        placeholder="Comments"
      ></textarea>
      <button type="submit">Add new contract</button>
    </form>
  );
};

export default ContractForm;
