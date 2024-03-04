export const contracts = [
  {
    id: 1,
    contractName: "Contract 1",
    client: "John Doe",
    startDate: "2023-01-01",
    duration: 12,
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    contractName: "Contract 2",
    client: "Anne Hathaway",
    startDate: "2023-02-15",
    duration: 6,
    comments: "Alice in wonderland.",
  },
  {
    id: 3,
    contractName: "Contract 3",
    client: "Celine Buch",
    startDate: "2021-03-21",
    duration: 6,
    comments: "This is not boring lorem ipsum text.",
  },
  {
    id: 4,
    contractName: "Contract 4",
    client: "Severus Snape",
    startDate: "2024-01-05",
    duration: 24,
    comments: "Obviously.",
  },
  {
    id: 5,
    contractName: "Contract 5",
    client: "Robin Hood",
    startDate: "2023-07-11",
    duration: 12,
    comments: "I live in Sherwood Forest.",
  },
  {
    id: 2,
    contractName: "Contract 6",
    client: "Anna Beck",
    startDate: "2022-07-11",
    duration: 48,
    comments: "This is my contract comment.",
  },
];

export const clients = [
  "John Doe",
  "Anne Hathaway",
  "Celine Buch",
  "Severus Snape",
  "Robin Hood",
  "Anna Beck",
];

export const addContract = (newContract) => {
  contracts.push(newContract);
};

export const deleteContract = (id) => {
  const index = contracts.findIndex((contract) => contract.id === id);
  if (index !== -1) {
    contracts.splice(index, 1);
  }
};
