//SPDX_License_Identifier : MIT

pragma solidity >= 0.7.3;
contract my_first_contract {
    event Updatedtmessages(string oldStr, string newStr);
    string public message;
    constructor(string memory initMessage) {
        message = initMessage;
    }
    function update(string memory newMessage) public{
        string memory olMsg = message;
        message = newMessage;
        emit Updatedtmessages(olMsg, newMessage);
    }

}
