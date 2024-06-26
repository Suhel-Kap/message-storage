# Message Storage Node JS Server

This Node JS server is responsible for establishing connection with the `MessageStorage` smart contract that is deployed on the Sepollia network.

## Installation

1. Clone the repository
2. Run `npm install`
3. Copy the `.env.example` file to `.env` and fill in the required values
   ```bash
    cp .env.example .env
    ```
4. Run the server
   ```bash
    npm start
    ```
5. The server will be running on `http://localhost:3000`
6. You can see the incoming and outgoing messages on the console


## API Endpoints

### GET /api/message

This endpoint returns the message that is stored on the smart contract.

You can test this endpoint on Postman or any other API testing tool by sending a `GET` request to `http://localhost:3000/api/message`.

### POST /api/message

This endpoint takes a message in the request body and stores it on the smart contract.

You can test this endpoint on Postman or any other API testing tool by sending a `POST` request to `http://localhost:3000/api/message` with the following request body:

```json
{
    "message": "Hello World"
}
```

It returns the transaction receipt of the transaction that stored the message on the smart contract.

Example response:
```json
{
    "receipt": {
        "to": "0x4080574e24777304A60daBdF9B394FD9497596a4",
        "from": "0xA14507b3ADE8C60cD9Bdc977baDd933c7D80742e",
        "contractAddress": null,
        "transactionIndex": 98,
        "gasUsed": {
            "type": "BigNumber",
            "hex": "0x7678"
        },
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "blockHash": "0x659307b39aedd50efff725bc6eb5820015e6b1450dfba6bf2ce5205942af13af",
        "transactionHash": "0x290d131ed9e7c3c42da052418011f01380536bb7c6c6d2e62135e3a8137ec9c1",
        "logs": [],
        "blockNumber": 6192201,
        "confirmations": 1,
        "cumulativeGasUsed": {
            "type": "BigNumber",
            "hex": "0x013e15fc"
        },
        "effectiveGasPrice": {
            "type": "BigNumber",
            "hex": "0x023ff61688"
        },
        "status": 1,
        "type": 2,
        "byzantium": true,
        "events": []
    }
}
```