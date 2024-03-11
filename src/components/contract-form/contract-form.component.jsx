import React, { useState } from "react";
import "./contract-form.styles.scss";

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
    <>
      <h1 className="form-title">Fill the form to add contract</h1>
      <form onSubmit={handleSubmit} className="contract-form">
        <div className="form-row">
          <label className="contract-form-label">
            Contract Name:
            <input
              label="Contract Name"
              type="text"
              name="contractName"
              value={contractData.contractName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contract-form-label">
            Client:
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
          </label>
        </div>
        <div className="form-row">
          <label className="contract-form-label">
            Start Date:
            <input
              type="date"
              name="startDate"
              value={contractData.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contract-form-label">
            Duration (months):
            <input
              type="number"
              name="duration"
              value={contractData.duration}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label className="contract-form-label">
            Comments:
            <textarea
              name="comments"
              value={contractData.comments}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="submit-button">
            Add new contract
          </button>
        </div>
      </form>
    </>
  );
};

export default ContractForm;
