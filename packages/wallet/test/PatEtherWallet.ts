import {
  time,
  loadFixture,
} from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { assert, expect } from 'chai';
import { ethers } from 'hardhat';
import { BaseContractLike } from './BaseContractLike';

describe('PatEtherWallet', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployPatEtherWalletFixture() {
    const PatEtherWallet = await ethers.getContractFactory('PatEtherWallet');
    const patEtherWallet = await PatEtherWallet.deploy();
    const [owner, anotherSigner] = await ethers.getSigners();
    console.log('patEtherWallet');
    return { patEtherWallet, owner, anotherSigner };
  }

  describe('PatEtherWallet', function () {
    describe('deposit', function () {
      it('Should deposit ether into appropriate wallet', async function () {
        const { patEtherWallet } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        await patEtherWallet.deposit({ value });

        expect(
          await ethers.provider.getBalance(patEtherWallet.getAddress())
        ).to.equal(value);

        expect(await patEtherWallet.myBalance()).to.equal(value);
      });
    });
    describe('transfer', function () {
      it('Should transfer ether from appropriate wallet', async function () {
        const { patEtherWallet, owner, anotherSigner } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        await patEtherWallet.deposit({ value });
        const anotherSignerAddress = await anotherSigner.getAddress();
        await patEtherWallet.transfer(anotherSignerAddress, value);

        expect(await patEtherWallet.myBalance()).to.equal(0);

        expect(await patEtherWallet.balance(anotherSignerAddress)).to.equal(
          value
        );
      });
      it('Should send ether to appropriate wallet', async function () {
        const { patEtherWallet, owner, anotherSigner } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        await patEtherWallet.deposit({ value });
        const anotherSignerAddress = await anotherSigner.getAddress();
        await patEtherWallet.transfer(anotherSignerAddress, value);

        expect(await patEtherWallet.balance(anotherSignerAddress)).to.equal(
          value
        );
      });
      it('should fails if insufficient balance', async function () {
        const { patEtherWallet, anotherSigner } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        const anotherSignerAddress = await anotherSigner.getAddress();
        await patEtherWallet.deposit({ value });
        await expect(
          patEtherWallet.transfer(
            anotherSignerAddress,
            value + ethers.parseEther('1')
          )
        ).to.be.revertedWith('Insufficient balance');
      });
      it('should fail if transferer has no wallet', async function () {
        const { patEtherWallet, anotherSigner } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        const anotherSignerAddress = await anotherSigner.getAddress();
        await expect(
          patEtherWallet.transfer(anotherSigner, value)
        ).to.be.revertedWith('Wallet not found');
      });
    });
    describe('withdraw', function () {
      it('Should withdraw ether from appropriate wallet', async function () {
        const { patEtherWallet, owner } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const initialBalance = await ethers.provider.getBalance(
          await owner.getAddress()
        );
        const value = ethers.parseEther('1');
        await patEtherWallet.deposit({ value });
        await patEtherWallet.withdraw(value);

        expect(await patEtherWallet.myBalance()).to.equal(0);

        // const newBalance = await ethers.provider.getBalance(
        //   await owner.getAddress()
        // );
        // expect(newBalance - initialBalance).to.equal(value);
      });
      it('should fails if insufficient balance', async function () {
        const { patEtherWallet, owner } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        await patEtherWallet.deposit({ value });
        await expect(
          patEtherWallet.withdraw(value + ethers.parseEther('1'))
        ).to.be.revertedWith('Insufficient balance');
      });
      it('should fail if withdrawer has no wallet', async function () {
        const { patEtherWallet } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        await expect(patEtherWallet.withdraw(value)).to.be.revertedWith(
          'Wallet not found'
        );
      });
    });
  });
});
