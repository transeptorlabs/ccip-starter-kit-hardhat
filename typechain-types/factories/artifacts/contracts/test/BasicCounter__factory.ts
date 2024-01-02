/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BasicCounter,
  BasicCounterInterface,
} from "../../../../artifacts/contracts/test/BasicCounter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
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
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newCount",
        type: "uint256",
      },
    ],
    name: "setCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b5061003261002761003760201b60201c565b61003f60201b60201c565b610103565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61062e806101126000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306661abd14610067578063715018a6146100855780638da5cb5b1461008f578063d09de08a146100ad578063d14e62b8146100b7578063f2fde38b146100d3575b600080fd5b61006f6100ef565b60405161007c9190610344565b60405180910390f35b61008d6100f5565b005b610097610109565b6040516100a491906103a0565b60405180910390f35b6100b5610132565b005b6100d160048036038101906100cc91906103ec565b610154565b005b6100ed60048036038101906100e89190610445565b61015e565b005b60015481565b6100fd6101e1565b610107600061025f565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61013a6101e1565b6001600081548092919061014d906104a1565b9190505550565b8060018190555050565b6101666101e1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cc9061056c565b60405180910390fd5b6101de8161025f565b50565b6101e9610323565b73ffffffffffffffffffffffffffffffffffffffff16610207610109565b73ffffffffffffffffffffffffffffffffffffffff161461025d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610254906105d8565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b61033e8161032b565b82525050565b60006020820190506103596000830184610335565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061038a8261035f565b9050919050565b61039a8161037f565b82525050565b60006020820190506103b56000830184610391565b92915050565b600080fd5b6103c98161032b565b81146103d457600080fd5b50565b6000813590506103e6816103c0565b92915050565b600060208284031215610402576104016103bb565b5b6000610410848285016103d7565b91505092915050565b6104228161037f565b811461042d57600080fd5b50565b60008135905061043f81610419565b92915050565b60006020828403121561045b5761045a6103bb565b5b600061046984828501610430565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104ac8261032b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036104de576104dd610472565b5b600182019050919050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006105566026836104e9565b9150610561826104fa565b604082019050919050565b6000602082019050818103600083015261058581610549565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006105c26020836104e9565b91506105cd8261058c565b602082019050919050565b600060208201905081810360008301526105f1816105b5565b905091905056fea264697066735822122040e7399613c5faf80acd2c12ad9b6b659923ba82ac8b315f261fb038cada963564736f6c63430008130033";

type BasicCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicCounter__factory extends ContractFactory {
  constructor(...args: BasicCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BasicCounter> {
    return super.deploy(overrides || {}) as Promise<BasicCounter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BasicCounter {
    return super.attach(address) as BasicCounter;
  }
  override connect(signer: Signer): BasicCounter__factory {
    return super.connect(signer) as BasicCounter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicCounterInterface {
    return new utils.Interface(_abi) as BasicCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicCounter {
    return new Contract(address, _abi, signerOrProvider) as BasicCounter;
  }
}
