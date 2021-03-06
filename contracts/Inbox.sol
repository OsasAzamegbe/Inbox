// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Inbox {
    string public message;

    constructor(string memory initMessage) {
        message = initMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
