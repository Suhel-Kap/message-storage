# Message Storage Contract


### Deployment Link

[Message Storage Contract](https://sepolia.etherscan.io/address/0x4080574e24777304A60daBdF9B394FD9497596a4#code)

This is a simple contract that stores a message and allows you to update it. It is a simple example of a smart contract that stores data on the blockchain.

### Setup

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run compile` to compile the contracts
4. Run `npm run test` to run the tests
5. It is now important to setup the environment variables to deploy the contract.
   1. You can get the Sepollia RPC URL from Alchemy or Infura. Once you have the URL, run `npm run set-vars:rpc` and paste the URL.
   2. You will also need an account with some Sepollia ETH. Once you have the private key, run `npm run set-vars:privateKey` and paste the private key.
   3. Finally, to verify the contract, you will need an Etherscan API key. Once you have the key, run `npm run set-vars:etherscan` and paste the key.
   4. Once the environment variables are set, you can deploy the contract by running `npm run deploy-and-verify`.

*Alternatively, if you want to deploy the contract without verifying it, you can run `npm run deploy`.*

### Testing

The contract has been tested using the following test cases:

1. Deploy the contract and check the initial message.
2. Update the message and check if it has been updated.
3. Try to update the message from an account that is not the owner.

To run the tests, run `npm run test`.
