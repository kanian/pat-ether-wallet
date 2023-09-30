import { BaseContract, ContractTransactionResponse, Contract } from "ethers";

export type BaseContractLike = BaseContract & {
  deploymentTransaction(): ContractTransactionResponse;
} & Omit<Contract, keyof BaseContract>;