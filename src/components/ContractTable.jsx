import React from "react";

const ContractTable = ({ contracts, handleDeleteContract }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Contract Name</th>
          <th>Client</th>
          <th>Start Date</th>
          <th>Duration</th>
          <th>Comments</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract) => (
          <tr key={contract.id}>
            <td>{contract.contractName}</td>
            <td>{contract.client}</td>
            <td>{contract.startDate}</td>
            <td>{contract.duration} months</td>
            <td>{contract.comments}</td>
            <td>
              <button onClick={() => handleDeleteContract(contract.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContractTable;
