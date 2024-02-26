import React, { useState } from "react";

const ContractForm = () => {
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
    // logic for contract save
    console.log(contractData);
    // reset
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
      <input
        type="text"
        name="client"
        value={contractData.client}
        onChange={handleChange}
        placeholder="Client"
        required
      />
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
