import React from "react";

const ContractTable = ({
  contracts,
  handleDeleteContract,
  userRole,
  setUserRole,
}) => {
  return (
    <div>
      {contracts.length === 0 ? (
        <p>No contracts found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Contract Name</th>
              <th>Client</th>
              <th>Start Date</th>
              <th>Duration</th>
              <th>Comments</th>
              {userRole === "admin" && <th>Action</th>}
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
                {userRole === "admin" && (
                  <td>
                    <button onClick={() => handleDeleteContract(contract.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContractTable;
