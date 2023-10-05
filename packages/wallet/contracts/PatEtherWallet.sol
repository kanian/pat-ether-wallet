// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

/*
A wallet that can be used by multiple people.
*/
contract PatEtherWallet {
    // Keep track of the ETH balance for multiple users
    mapping(address => uint256) private wallets;
    mapping(address => bool) private walletKeys;

    address private owner;

    constructor() {
        owner = msg.sender;
    }

    /**
     * Deposit ETH into the smart contract wallet
     */
    function deposit() public payable {
        createWalletIfNotExists(msg.sender);
        wallets[msg.sender] += msg.value;
    }

    /**
     * Transfer ETH from one user to another
     * @param receiver The address of the receiver
     * @param amount The amount to transfer
     */
    function transfer(
        address payable receiver,
        uint256 amount
    ) public balanceIsSufficient(amount) walletExists(msg.sender) {
        wallets[msg.sender] -= amount;
        createWalletIfNotExists(receiver);
        wallets[receiver] += amount;
    }

    function createWalletIfNotExists(address wallet) private {
        if (!walletKeys[wallet]) {
            walletKeys[wallet] = true;
        }
    }

    /**
     * Withdraw ETH from the smart contract wallet
     * @param amount The amount to withdraw
     */
    function withdraw(
        uint amount
    ) public balanceIsSufficient(amount) walletExists(msg.sender) {
        payable(msg.sender).transfer(amount);
        wallets[msg.sender] -= amount;
    }

    /**
     * Get the balance of the smart contract wallet
     * @return The balance of the smart contract wallet
     */
    function myBalance() public view walletExists(msg.sender) returns (uint) {
        return wallets[msg.sender];
    }

    /**
     * Get the balance of the smart contract wallet
     * @param wallet The address of the wallet
     * @return The balance of the smart contract wallet
     */
    function balance(
        address wallet
    ) public view onlyOwner walletExists(wallet) returns (uint) {
        return wallets[wallet];
    }

    // modifier to check balance
    modifier balanceIsSufficient(uint amount) {
        require(walletKeys[msg.sender], "Wallet not found");
        require(amount <= wallets[msg.sender], "Insufficient balance");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier walletExists(address wallet) {
        require(walletKeys[wallet], "Wallet not found");
        _;
    }
}
