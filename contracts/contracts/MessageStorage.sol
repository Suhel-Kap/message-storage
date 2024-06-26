// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract MessageStorage {
    string private message;
    address private admin;

    constructor(string memory initialMessage) {
        message = initialMessage;
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function getAdmin() public view returns (address) {
        return admin;
    }

    function setMessage(string memory newMessage) external onlyAdmin {
        message = newMessage;
    }
}
