/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GenericUpgradableTokenMintable,
  GenericUpgradableTokenMintableInterface,
} from "../GenericUpgradableTokenMintable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newTotalSupply",
        type: "uint256",
      },
    ],
    name: "updateTotalSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611290806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063a457c2d711610071578063a457c2d71461021c578063a9059cbb1461022f578063dc20da7b14610242578063dd62ed3e14610255578063f2fde38b1461028e57610116565b8063715018a6146101de57806379cc6790146101e65780638da5cb5b146101f957806395d89b411461021457610116565b8063313ce567116100e9578063313ce5671461018157806339509351146101905780633ced4b37146101a357806342966c68146101b857806370a08231146101cb57610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b6101236102a1565b60405161013091906110ee565b60405180910390f35b61014c610147366004611021565b610333565b6040519015158152602001610130565b6035545b604051908152602001610130565b61014c61017c366004610fe6565b610349565b60405160128152602001610130565b61014c61019e366004611021565b6103f8565b6101b66101b1366004611021565b610434565b005b6101b66101c63660046110d6565b610484565b6101606101d9366004610f9a565b610491565b6101b66104b0565b6101b66101f4366004611021565b6104e6565b6097546040516001600160a01b039091168152602001610130565b610123610567565b61014c61022a366004611021565b610576565b61014c61023d366004611021565b61060f565b6101b661025036600461104a565b61061c565b610160610263366004610fb4565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101b661029c366004610f9a565b6106cb565b6060603680546102b0906111f3565b80601f01602080910402602001604051908101604052809291908181526020018280546102dc906111f3565b80156103295780601f106102fe57610100808354040283529160200191610329565b820191906000526020600020905b81548152906001019060200180831161030c57829003601f168201915b5050505050905090565b6000610340338484610763565b50600192915050565b6000610356848484610887565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156103e05760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103ed8533858403610763565b506001949350505050565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909161034091859061042f9086906111c4565b610763565b6097546001600160a01b0316331461045e5760405162461bcd60e51b81526004016103d79061118f565b600061047361046c60355490565b8390610a56565b905061047f8382610a69565b505050565b61048e3382610b48565b50565b6001600160a01b0381166000908152603360205260409020545b919050565b6097546001600160a01b031633146104da5760405162461bcd60e51b81526004016103d79061118f565b6104e46000610c96565b565b60006104f28333610263565b9050818110156105505760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016103d7565b61055d8333848403610763565b61047f8383610b48565b6060603780546102b0906111f3565b3360009081526034602090815260408083206001600160a01b0386168452909152812054828110156105f85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103d7565b6106053385858403610763565b5060019392505050565b6000610340338484610887565b600054610100900460ff1680610635575060005460ff16155b6106515760405162461bcd60e51b81526004016103d790611141565b600054610100900460ff1615801561067c576000805460ff1961ff0019909116610100171660011790555b610684610ce8565b61068e8686610d5c565b610696610ce8565b61069e610dfa565b6106a88385610a69565b6106b1826106cb565b80156106c3576000805461ff00191690555b505050505050565b6097546001600160a01b031633146106f55760405162461bcd60e51b81526004016103d79061118f565b6001600160a01b03811661075a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103d7565b61048e81610c96565b6001600160a01b0383166107c55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d7565b6001600160a01b0382166108265760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d7565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166108eb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d7565b6001600160a01b03821661094d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d7565b6001600160a01b038316600090815260336020526040902054818110156109c55760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d7565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906109fc9084906111c4565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a4891815260200190565b60405180910390a350505050565b6000610a6282846111dc565b9392505050565b6001600160a01b038216610abf5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d7565b8060356000828254610ad191906111c4565b90915550506001600160a01b03821660009081526033602052604081208054839290610afe9084906111c4565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610ba85760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103d7565b6001600160a01b03821660009081526033602052604090205481811015610c1c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103d7565b6001600160a01b0383166000908152603360205260408120838303905560358054849290610c4b9084906111dc565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361047f565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680610d01575060005460ff16155b610d1d5760405162461bcd60e51b81526004016103d790611141565b600054610100900460ff16158015610d48576000805460ff1961ff0019909116610100171660011790555b801561048e576000805461ff001916905550565b600054610100900460ff1680610d75575060005460ff16155b610d915760405162461bcd60e51b81526004016103d790611141565b600054610100900460ff16158015610dbc576000805460ff1961ff0019909116610100171660011790555b8251610dcf906036906020860190610e63565b508151610de3906037906020850190610e63565b50801561047f576000805461ff0019169055505050565b600054610100900460ff1680610e13575060005460ff16155b610e2f5760405162461bcd60e51b81526004016103d790611141565b600054610100900460ff16158015610e5a576000805460ff1961ff0019909116610100171660011790555b610d4833610c96565b828054610e6f906111f3565b90600052602060002090601f016020900481019282610e915760008555610ed7565b82601f10610eaa57805160ff1916838001178555610ed7565b82800160010185558215610ed7579182015b82811115610ed7578251825591602001919060010190610ebc565b50610ee3929150610ee7565b5090565b5b80821115610ee35760008155600101610ee8565b80356001600160a01b03811681146104ab57600080fd5b600082601f830112610f23578081fd5b813567ffffffffffffffff80821115610f3e57610f3e611244565b604051601f8301601f19908116603f01168101908282118183101715610f6657610f66611244565b81604052838152866020858801011115610f7e578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610fab578081fd5b610a6282610efc565b60008060408385031215610fc6578081fd5b610fcf83610efc565b9150610fdd60208401610efc565b90509250929050565b600080600060608486031215610ffa578081fd5b61100384610efc565b925061101160208501610efc565b9150604084013590509250925092565b60008060408385031215611033578182fd5b61103c83610efc565b946020939093013593505050565b600080600080600060a08688031215611061578081fd5b853567ffffffffffffffff80821115611078578283fd5b61108489838a01610f13565b96506020880135915080821115611099578283fd5b506110a688828901610f13565b945050604086013592506110bc60608701610efc565b91506110ca60808701610efc565b90509295509295909350565b6000602082840312156110e7578081fd5b5035919050565b6000602080835283518082850152825b8181101561111a578581018301518582016040015282016110fe565b8181111561112b5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156111d7576111d761122e565b500190565b6000828210156111ee576111ee61122e565b500390565b60028104600182168061120757607f821691505b6020821081141561122857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220d1b27abc1fdada051612348cb1822b5bce3ea7806199013a839fc69c7e9f2f8764736f6c63430008020033";

export class GenericUpgradableTokenMintable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenericUpgradableTokenMintable> {
    return super.deploy(
      overrides || {}
    ) as Promise<GenericUpgradableTokenMintable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GenericUpgradableTokenMintable {
    return super.attach(address) as GenericUpgradableTokenMintable;
  }
  connect(signer: Signer): GenericUpgradableTokenMintable__factory {
    return super.connect(signer) as GenericUpgradableTokenMintable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenericUpgradableTokenMintableInterface {
    return new utils.Interface(_abi) as GenericUpgradableTokenMintableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericUpgradableTokenMintable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GenericUpgradableTokenMintable;
  }
}