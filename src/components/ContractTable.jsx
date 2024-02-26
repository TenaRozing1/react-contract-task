import React from "react";

const ContractTable = ({ contracts }) => {
  return (
    <table>
      <th>
        <tr>
          <th>Contract Name</th>
          <th>Client</th>
          <th>Start Date</th>
          <th>Duration</th>
          <th>Comments</th>
        </tr>
      </th>
      <tbody>
        {contracts.map((contract, index) => (
          <tr key={index}>
            <td>{contract.contractName}</td>
            <td>{contract.client}</td>
            <td>{contract.startDate}</td>
            <td>{contract.duration} months</td>
            <td>{contract.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContractTable;
