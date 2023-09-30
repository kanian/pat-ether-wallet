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
    const [owner] = await ethers.getSigners();
    console.log('patEtherWallet');
    return { patEtherWallet, owner };
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
    describe('withdraw', function () {
      it('Should withdraw ether from appropriate wallet', async function () {
        const { patEtherWallet } = await loadFixture(
          deployPatEtherWalletFixture
        );
        const value = ethers.parseEther('1');
        await patEtherWallet.deposit({ value });
        await patEtherWallet.withdraw(value);

        expect(
          await ethers.provider.getBalance(patEtherWallet.getAddress())
        ).to.equal(0);

        expect(await patEtherWallet.myBalance()).to.equal(0);
      });
    });
    it('should fails if insufficient balance', async function () {
      const { patEtherWallet, owner } = await loadFixture(
        deployPatEtherWalletFixture
      );
      const value = ethers.parseEther('1');
      await patEtherWallet.deposit({ value });
      await expect(
        patEtherWallet.withdraw(
          value + ethers.parseEther('1')
        )
      ).to.be.revertedWith('Insufficient balance');
    });
    it('should fail if withdrawer has no wallet', async function () {
      const { patEtherWallet } = await loadFixture(
        deployPatEtherWalletFixture
      );
      const value = ethers.parseEther('1');
      await expect(
        patEtherWallet.withdraw(value)
      ).to.be.revertedWith('Wallet not found');
    })
  });
});
