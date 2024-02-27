import React from 'react';

const ContractFilter = ({ clients, handleFilterChange }) => {
  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="">All Clients</option>
        {clients.map((client, index) => (
          <option key={index} value={client}>{client}</option>
        ))}
      </select>
    </div>
  );
};

export default ContractFilter;
