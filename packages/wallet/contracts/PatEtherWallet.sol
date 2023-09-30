// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

/*
A wallet that can be used by multiple people.
*/
contract PatEtherWallet {
    // Keep track of the ETH balance for multiple users
    mapping(address => uint256) private wallets;
    mapping(address => bool) private walletKeys;

    /**
     * Deposit ETH into the smart contract wallet
     */
    function deposit() public payable {
        wallets[msg.sender] += msg.value;
        if (!walletKeys[msg.sender]) {
            walletKeys[msg.sender] = true;
        }
    }

    /**
     * Transfer ETH from one user to another
     * @param receiver The address of the receiver
     * @param amount The amount to transfer
     */
    function transfer(address payable receiver, uint256 amount) public {
        require(amount <= wallets[msg.sender], "unsufficient balance");
        wallets[msg.sender] -= amount;
        wallets[receiver] += amount;
    }

    /**
     * Withdraw ETH from the smart contract wallet
     * @param amount The amount to withdraw
     */
    function withdraw(uint amount) public {
        // require that wallet exists
        require(walletKeys[msg.sender], "Wallet not found");
        // require that amount is less than balance
        require(amount <= wallets[msg.sender], "Insufficient balance");
        payable(msg.sender).transfer(amount);
        wallets[msg.sender] -= amount;
    }

    /**
     * Get the balance of the smart contract wallet
     * @return The balance of the smart contract wallet
     */
    function myBalance() public view returns (uint) {
        return wallets[msg.sender];
    }
}
