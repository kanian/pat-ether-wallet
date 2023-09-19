/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  PatEtherWallet,
  PatEtherWalletInterface,
} from "../PatEtherWallet";

const _abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "myBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061083e806100206000396000f3fe60806040526004361061003f5760003560e01c80632e1a7d4d14610044578063a9059cbb1461006d578063c9116b6914610096578063d0e30db0146100c1575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610527565b6100cb565b005b34801561007957600080fd5b50610094600480360381019061008f91906105b2565b610277565b005b3480156100a257600080fd5b506100ab6103a6565b6040516100b89190610601565b60405180910390f35b6100c96103ec565b005b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610157576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014e90610679565b60405180910390fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548111156101d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cf906106e5565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561021e573d6000803e3d6000fd5b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461026d9190610734565b9250508190555050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548111156102f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ef906107b4565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103469190610734565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461039b91906107d4565b925050819055505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043a91906107d4565b92505081905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104ea5760018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b565b600080fd5b6000819050919050565b610504816104f1565b811461050f57600080fd5b50565b600081359050610521816104fb565b92915050565b60006020828403121561053d5761053c6104ec565b5b600061054b84828501610512565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061057f82610554565b9050919050565b61058f81610574565b811461059a57600080fd5b50565b6000813590506105ac81610586565b92915050565b600080604083850312156105c9576105c86104ec565b5b60006105d78582860161059d565b92505060206105e885828601610512565b9150509250929050565b6105fb816104f1565b82525050565b600060208201905061061660008301846105f2565b92915050565b600082825260208201905092915050565b7f57616c6c6574206e6f7420666f756e6400000000000000000000000000000000600082015250565b600061066360108361061c565b915061066e8261062d565b602082019050919050565b6000602082019050818103600083015261069281610656565b9050919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b60006106cf60148361061c565b91506106da82610699565b602082019050919050565b600060208201905081810360008301526106fe816106c2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061073f826104f1565b915061074a836104f1565b925082820390508181111561076257610761610705565b5b92915050565b7f756e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b600061079e60148361061c565b91506107a982610768565b602082019050919050565b600060208201905081810360008301526107cd81610791565b9050919050565b60006107df826104f1565b91506107ea836104f1565b925082820190508082111561080257610801610705565b5b9291505056fea2646970667358221220b7819de686e9764d30774bb044165717179db01fe6bbe692232b5a6db58e3fb964736f6c63430008130033";

type PatEtherWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PatEtherWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PatEtherWallet__factory extends ContractFactory {
  constructor(...args: PatEtherWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PatEtherWallet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PatEtherWallet__factory {
    return super.connect(runner) as PatEtherWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PatEtherWalletInterface {
    return new Interface(_abi) as PatEtherWalletInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PatEtherWallet {
    return new Contract(address, _abi, runner) as unknown as PatEtherWallet;
  }
}
