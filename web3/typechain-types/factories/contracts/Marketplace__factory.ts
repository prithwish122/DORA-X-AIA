/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Marketplace,
  MarketplaceInterface,
} from "../../contracts/Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "Bought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "Offered",
    type: "event",
  },
  {
    inputs: [],
    name: "feeAccount",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feePercent",
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
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "getTotalPrice",
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
    name: "itemCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "contract IERC721",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "makeItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "purchaseItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516200119f3803806200119f833981810160405281019061003491906100b9565b60016000819055503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508060a08181525050506100e6565b600080fd5b6000819050919050565b61009681610083565b81146100a157600080fd5b50565b6000815190506100b38161008d565b92915050565b6000602082840312156100cf576100ce61007e565b5b60006100dd848285016100a4565b91505092915050565b60805160a0516110856200011a600039600081816101e601526102970152600081816101bc01526104bc01526110856000f3fe6080604052600436106100705760003560e01c8063bfb231d21161004e578063bfb231d2146100f6578063ca7dd37514610138578063d38ea5bf14610175578063fa00afc71461019157610070565b806365e17c9d146100755780636bfb0d01146100a05780637fd6f15c146100cb575b600080fd5b34801561008157600080fd5b5061008a6101ba565b60405161009791906109d3565b60405180910390f35b3480156100ac57600080fd5b506100b56101de565b6040516100c29190610a07565b60405180910390f35b3480156100d757600080fd5b506100e06101e4565b6040516100ed9190610a07565b60405180910390f35b34801561010257600080fd5b5061011d60048036038101906101189190610a53565b610208565b60405161012f96959493929190610afa565b60405180910390f35b34801561014457600080fd5b5061015f600480360381019061015a9190610a53565b610291565b60405161016c9190610a07565b60405180910390f35b61018f600480360381019061018a9190610a53565b6102f4565b005b34801561019d57600080fd5b506101b860048036038101906101b39190610bab565b6106c1565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905086565b600060647f000000000000000000000000000000000000000000000000000000000000000060646102c29190610c2d565b60026000858152602001908152602001600020600301546102e39190610c61565b6102ed9190610cd2565b9050919050565b600260005403610339576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033090610d60565b60405180910390fd5b6002600081905550600061034c82610291565b9050600060026000848152602001908152602001600020905060008311801561037757506001548311155b6103b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ad90610dcc565b60405180910390fd5b813410156103f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f090610e5e565b60405180910390fd5b8060040160149054906101000a900460ff161561044b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044290610eca565b60405180910390fd5b8060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600301549081150290604051600060405180830381858888f193505050501580156104b9573d6000803e3d6000fd5b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc8260030154846105049190610eea565b9081150290604051600060405180830381858888f1935050505015801561052f573d6000803e3d6000fd5b5060018160040160146101000a81548160ff0219169083151502179055508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600201546040518463ffffffff1660e01b81526004016105b293929190610f2d565b600060405180830381600087803b1580156105cc57600080fd5b505af11580156105e0573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff168160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8b4c9c8a607d67b321582dd8461041b1dc2ceeca70c8b7f37f8e02095cf2e76d86856002015486600301546040516106ac93929190610f64565b60405180910390a45050600160008190555050565b600260005403610706576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fd90610d60565b60405180910390fd5b600260008190555060008111610751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074890610fe7565b60405180910390fd5b6001600081548092919061076490611007565b91905055508273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016107a693929190610f2d565b600060405180830381600087803b1580156107c057600080fd5b505af11580156107d4573d6000803e3d6000fd5b505050506040518060c0016040528060015481526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600015158152506002600060015481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160040160146101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f655a0cf9c8db81512be9a76dc1c5ae5380b8816ce6ad659cd61b715e2999d59a600154858560405161097d93929190610f64565b60405180910390a36001600081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109bd82610992565b9050919050565b6109cd816109b2565b82525050565b60006020820190506109e860008301846109c4565b92915050565b6000819050919050565b610a01816109ee565b82525050565b6000602082019050610a1c60008301846109f8565b92915050565b600080fd5b610a30816109ee565b8114610a3b57600080fd5b50565b600081359050610a4d81610a27565b92915050565b600060208284031215610a6957610a68610a22565b5b6000610a7784828501610a3e565b91505092915050565b6000819050919050565b6000610aa5610aa0610a9b84610992565b610a80565b610992565b9050919050565b6000610ab782610a8a565b9050919050565b6000610ac982610aac565b9050919050565b610ad981610abe565b82525050565b60008115159050919050565b610af481610adf565b82525050565b600060c082019050610b0f60008301896109f8565b610b1c6020830188610ad0565b610b2960408301876109f8565b610b3660608301866109f8565b610b4360808301856109c4565b610b5060a0830184610aeb565b979650505050505050565b6000610b6682610992565b9050919050565b6000610b7882610b5b565b9050919050565b610b8881610b6d565b8114610b9357600080fd5b50565b600081359050610ba581610b7f565b92915050565b600080600060608486031215610bc457610bc3610a22565b5b6000610bd286828701610b96565b9350506020610be386828701610a3e565b9250506040610bf486828701610a3e565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c38826109ee565b9150610c43836109ee565b9250828201905080821115610c5b57610c5a610bfe565b5b92915050565b6000610c6c826109ee565b9150610c77836109ee565b9250828202610c85816109ee565b91508282048414831517610c9c57610c9b610bfe565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610cdd826109ee565b9150610ce8836109ee565b925082610cf857610cf7610ca3565b5b828204905092915050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610d4a601f83610d03565b9150610d5582610d14565b602082019050919050565b60006020820190508181036000830152610d7981610d3d565b9050919050565b7f6974656d20646f65736e27742065786973740000000000000000000000000000600082015250565b6000610db6601283610d03565b9150610dc182610d80565b602082019050919050565b60006020820190508181036000830152610de581610da9565b9050919050565b7f6e6f7420656e6f75676820657468657220746f20636f766572206974656d207060008201527f7269636520616e64206d61726b65742066656500000000000000000000000000602082015250565b6000610e48603383610d03565b9150610e5382610dec565b604082019050919050565b60006020820190508181036000830152610e7781610e3b565b9050919050565b7f6974656d20616c726561647920736f6c64000000000000000000000000000000600082015250565b6000610eb4601183610d03565b9150610ebf82610e7e565b602082019050919050565b60006020820190508181036000830152610ee381610ea7565b9050919050565b6000610ef5826109ee565b9150610f00836109ee565b9250828203905081811115610f1857610f17610bfe565b5b92915050565b610f2781610b5b565b82525050565b6000606082019050610f426000830186610f1e565b610f4f6020830185610f1e565b610f5c60408301846109f8565b949350505050565b6000606082019050610f7960008301866109f8565b610f8660208301856109f8565b610f9360408301846109f8565b949350505050565b7f5072696365206d7573742062652067726561746572207468616e207a65726f00600082015250565b6000610fd1601f83610d03565b9150610fdc82610f9b565b602082019050919050565b6000602082019050818103600083015261100081610fc4565b9050919050565b6000611012826109ee565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361104457611043610bfe565b5b60018201905091905056fea2646970667358221220713828d18e0ed2513db0bd6387eae6e1ebb52ad946b9686d6ff6874e7327230164736f6c63430008180033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _feePercent: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_feePercent, overrides || {});
  }
  override deploy(
    _feePercent: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_feePercent, overrides || {}) as Promise<
      Marketplace & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Marketplace__factory {
    return super.connect(runner) as Marketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new Interface(_abi) as MarketplaceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Marketplace {
    return new Contract(address, _abi, runner) as unknown as Marketplace;
  }
}
