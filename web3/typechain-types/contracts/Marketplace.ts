/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface MarketplaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "feeAccount"
      | "feePercent"
      | "getTotalPrice"
      | "itemCount"
      | "items"
      | "makeItem"
      | "purchaseItem"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Bought" | "Offered"): EventFragment;

  encodeFunctionData(
    functionFragment: "feeAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "itemCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "items", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "makeItem",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseItem",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "feeAccount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feePercent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "itemCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "items", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "purchaseItem",
    data: BytesLike
  ): Result;
}

export namespace BoughtEvent {
  export type InputTuple = [
    itemId: BigNumberish,
    nft: AddressLike,
    tokenId: BigNumberish,
    price: BigNumberish,
    seller: AddressLike,
    buyer: AddressLike
  ];
  export type OutputTuple = [
    itemId: bigint,
    nft: string,
    tokenId: bigint,
    price: bigint,
    seller: string,
    buyer: string
  ];
  export interface OutputObject {
    itemId: bigint;
    nft: string;
    tokenId: bigint;
    price: bigint;
    seller: string;
    buyer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OfferedEvent {
  export type InputTuple = [
    itemId: BigNumberish,
    nft: AddressLike,
    tokenId: BigNumberish,
    price: BigNumberish,
    seller: AddressLike
  ];
  export type OutputTuple = [
    itemId: bigint,
    nft: string,
    tokenId: bigint,
    price: bigint,
    seller: string
  ];
  export interface OutputObject {
    itemId: bigint;
    nft: string;
    tokenId: bigint;
    price: bigint;
    seller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Marketplace extends BaseContract {
  connect(runner?: ContractRunner | null): Marketplace;
  waitForDeployment(): Promise<this>;

  interface: MarketplaceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  feeAccount: TypedContractMethod<[], [string], "view">;

  feePercent: TypedContractMethod<[], [bigint], "view">;

  getTotalPrice: TypedContractMethod<[_itemId: BigNumberish], [bigint], "view">;

  itemCount: TypedContractMethod<[], [bigint], "view">;

  items: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, bigint, string, boolean] & {
        itemId: bigint;
        nft: string;
        tokenId: bigint;
        price: bigint;
        seller: string;
        sold: boolean;
      }
    ],
    "view"
  >;

  makeItem: TypedContractMethod<
    [_nft: AddressLike, _tokenId: BigNumberish, _price: BigNumberish],
    [void],
    "nonpayable"
  >;

  purchaseItem: TypedContractMethod<[_itemId: BigNumberish], [void], "payable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "feeAccount"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalPrice"
  ): TypedContractMethod<[_itemId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "itemCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "items"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, bigint, string, boolean] & {
        itemId: bigint;
        nft: string;
        tokenId: bigint;
        price: bigint;
        seller: string;
        sold: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "makeItem"
  ): TypedContractMethod<
    [_nft: AddressLike, _tokenId: BigNumberish, _price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "purchaseItem"
  ): TypedContractMethod<[_itemId: BigNumberish], [void], "payable">;

  getEvent(
    key: "Bought"
  ): TypedContractEvent<
    BoughtEvent.InputTuple,
    BoughtEvent.OutputTuple,
    BoughtEvent.OutputObject
  >;
  getEvent(
    key: "Offered"
  ): TypedContractEvent<
    OfferedEvent.InputTuple,
    OfferedEvent.OutputTuple,
    OfferedEvent.OutputObject
  >;

  filters: {
    "Bought(uint256,address,uint256,uint256,address,address)": TypedContractEvent<
      BoughtEvent.InputTuple,
      BoughtEvent.OutputTuple,
      BoughtEvent.OutputObject
    >;
    Bought: TypedContractEvent<
      BoughtEvent.InputTuple,
      BoughtEvent.OutputTuple,
      BoughtEvent.OutputObject
    >;

    "Offered(uint256,address,uint256,uint256,address)": TypedContractEvent<
      OfferedEvent.InputTuple,
      OfferedEvent.OutputTuple,
      OfferedEvent.OutputObject
    >;
    Offered: TypedContractEvent<
      OfferedEvent.InputTuple,
      OfferedEvent.OutputTuple,
      OfferedEvent.OutputObject
    >;
  };
}