/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  StakingV2CommonSignatures,
  StakingV2CommonSignaturesInterface,
} from "../StakingV2CommonSignatures";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "usedHashes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class StakingV2CommonSignatures__factory {
  static readonly abi = _abi;
  static createInterface(): StakingV2CommonSignaturesInterface {
    return new utils.Interface(_abi) as StakingV2CommonSignaturesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingV2CommonSignatures {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakingV2CommonSignatures;
  }
}