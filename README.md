# Message Storage

This repository contains the code for the Message Storage smart contract and the Node JS server that interacts with the smart contract.

The smart contract is deployed and verified on the Sepollia network. It can be accessed using the following address: [`0x4080574e24777304A60daBdF9B394FD9497596a4`](https://sepolia.etherscan.io/address/0x4080574e24777304a60dabdf9b394fd9497596a4#code)

## Installation

1. Clone the repository
2. cd into the `contracts` directory
3. Follow the instructions in the `README.md` file in the `contracts` directory to deploy the smart contract
4. cd into the `backend` directory
5. Follow the instructions in the `README.md` file in the `backend` directory to run the Node JS server

## Usage

1. Start the Node JS server
2. Use the API endpoints to interact with the smart contract
3. The server will be running on `http://localhost:3000`
4. You can see the incoming and outgoing messages on the console
5. Use the following API endpoints to interact with the smart contract:
6. GET /api/message (more details in the backend README)
7. POST /api/message (more details in the backend README)

## Tech Stack

For the smart contract:
- Solidity
- Hardhat

For the Node JS server:
- Node JS
- Express
- Ethers.js
- TypeScript
- Dotenv