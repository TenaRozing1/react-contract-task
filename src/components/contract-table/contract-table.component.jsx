import React from "react";
import "./contract-table.styles.scss";

const ContractTable = ({ contracts, handleDeleteContract, userRole }) => {
  return (
    <div className="contract-grid">
      {contracts.length === 0 ? (
        <p className="message">No contracts found.</p>
      ) : (
        contracts.map((contract) => (
          <div key={contract.id} className="contract-card">
            <h2 class="contract-name-title">{contract.contractName}</h2>
            <div className="contract-text">
              <span className="contract-subtitle">Client name: </span>
              <span>{contract.client}</span>
            </div>
            <div className="contract-text">
              <span className="contract-subtitle">Start Date: </span>
              <span>{contract.startDate}</span>
            </div>
            <div className="contract-text">
              <span className="contract-subtitle">Duration: </span>
              <span>{contract.duration} months</span>
            </div>
            <div className="contract-text">
              <span className="contract-subtitle">Comments: </span>
              <span>{contract.comments}</span>
            </div>
            {userRole === "admin" && (
              <button onClick={() => handleDeleteContract(contract.id)}>
                Delete
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ContractTable;
