/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type UserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  callGasLimit: PromiseOrValue<BigNumberish>;
  verificationGasLimit: PromiseOrValue<BigNumberish>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  maxFeePerGas: PromiseOrValue<BigNumberish>;
  maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export declare namespace Client {
  export type EVMTokenAmountStruct = {
    token: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type EVMTokenAmountStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
  };

  export type Any2EVMMessageStruct = {
    messageId: PromiseOrValue<BytesLike>;
    sourceChainSelector: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
    destTokenAmounts: Client.EVMTokenAmountStruct[];
  };

  export type Any2EVMMessageStructOutput = [
    string,
    BigNumber,
    string,
    string,
    Client.EVMTokenAmountStructOutput[]
  ] & {
    messageId: string;
    sourceChainSelector: BigNumber;
    sender: string;
    data: string;
    destTokenAmounts: Client.EVMTokenAmountStructOutput[];
  };
}

export interface TranseptorAccountInterface extends utils.Interface {
  functions: {
    "addDeposit()": FunctionFragment;
    "ccipReceive((bytes32,uint64,bytes,bytes,(address,uint256)[]))": FunctionFragment;
    "ccipSendMessage(uint64,address,string,address,uint256,uint8)": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "execute(address,uint256,bytes)": FunctionFragment;
    "executeBatch(address[],uint256[],bytes[])": FunctionFragment;
    "getDeposit()": FunctionFragment;
    "getLastReceivedMessageDetails()": FunctionFragment;
    "getNonce()": FunctionFragment;
    "getNumberOfReceivedMessages()": FunctionFragment;
    "getReceivedMessageAt(uint256)": FunctionFragment;
    "getReceivedMessageDetails(bytes32)": FunctionFragment;
    "getRouter()": FunctionFragment;
    "getSupportedTokens(uint64)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "messageDetail(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "receivedMessages(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    "withdrawDepositTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDeposit"
      | "ccipReceive"
      | "ccipSendMessage"
      | "entryPoint"
      | "execute"
      | "executeBatch"
      | "getDeposit"
      | "getLastReceivedMessageDetails"
      | "getNonce"
      | "getNumberOfReceivedMessages"
      | "getReceivedMessageAt"
      | "getReceivedMessageDetails"
      | "getRouter"
      | "getSupportedTokens"
      | "initialize"
      | "messageDetail"
      | "owner"
      | "proxiableUUID"
      | "receivedMessages"
      | "supportsInterface"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "validateUserOp"
      | "withdrawDepositTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccipReceive",
    values: [Client.Any2EVMMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "ccipSendMessage",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastReceivedMessageDetails",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getNumberOfReceivedMessages",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReceivedMessageAt",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceivedMessageDetails",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "getRouter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "messageDetail",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivedMessages",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      UserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDepositTo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ccipReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccipSendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLastReceivedMessageDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfReceivedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedMessageAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedMessageDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDepositTo",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "MessageReceived(bytes32,uint64,address,string,tuple)": EventFragment;
    "MessageSent(bytes32,uint64,address,string,tuple,uint256,uint8)": EventFragment;
    "TranseptorAccountInitialized(address,address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TranseptorAccountInitialized"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface MessageReceivedEventObject {
  messageId: string;
  sourceChainSelector: BigNumber;
  sender: string;
  message: string;
  tokenAmount: Client.EVMTokenAmountStructOutput;
}
export type MessageReceivedEvent = TypedEvent<
  [string, BigNumber, string, string, Client.EVMTokenAmountStructOutput],
  MessageReceivedEventObject
>;

export type MessageReceivedEventFilter = TypedEventFilter<MessageReceivedEvent>;

export interface MessageSentEventObject {
  messageId: string;
  destinationChainSelector: BigNumber;
  receiver: string;
  message: string;
  tokenAmount: Client.EVMTokenAmountStructOutput;
  ccipFee: BigNumber;
  payFeesIn: number;
}
export type MessageSentEvent = TypedEvent<
  [
    string,
    BigNumber,
    string,
    string,
    Client.EVMTokenAmountStructOutput,
    BigNumber,
    number
  ],
  MessageSentEventObject
>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface TranseptorAccountInitializedEventObject {
  entryPoint: string;
  owner: string;
  ccipRouter: string;
}
export type TranseptorAccountInitializedEvent = TypedEvent<
  [string, string, string],
  TranseptorAccountInitializedEventObject
>;

export type TranseptorAccountInitializedEventFilter =
  TypedEventFilter<TranseptorAccountInitializedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface TranseptorAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TranseptorAccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ccipSendMessage(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payFeesIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLastReceivedMessageDetails(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string, string, BigNumber] & {
        messageId: string;
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumberOfReceivedMessages(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { number: BigNumber }>;

    getReceivedMessageAt(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string, string, BigNumber] & {
        messageId: string;
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    getReceivedMessageDetails(
      messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    getRouter(overrides?: CallOverrides): Promise<[string]>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    messageDetail(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    receivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addDeposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ccipReceive(
    message: Client.Any2EVMMessageStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ccipSendMessage(
    destinationChainSelector: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    message: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    payFeesIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  execute(
    dest: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    func: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeBatch(
    dest: PromiseOrValue<string>[],
    value: PromiseOrValue<BigNumberish>[],
    func: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getLastReceivedMessageDetails(
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, string, string, BigNumber] & {
      messageId: string;
      sourceChainSelector: BigNumber;
      sender: string;
      message: string;
      token: string;
      amount: BigNumber;
    }
  >;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  getNumberOfReceivedMessages(overrides?: CallOverrides): Promise<BigNumber>;

  getReceivedMessageAt(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, string, string, BigNumber] & {
      messageId: string;
      sourceChainSelector: BigNumber;
      sender: string;
      message: string;
      token: string;
      amount: BigNumber;
    }
  >;

  getReceivedMessageDetails(
    messageId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber] & {
      sourceChainSelector: BigNumber;
      sender: string;
      message: string;
      token: string;
      amount: BigNumber;
    }
  >;

  getRouter(overrides?: CallOverrides): Promise<string>;

  getSupportedTokens(
    chainSelector: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  initialize(
    anOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  messageDetail(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber] & {
      sourceChainSelector: BigNumber;
      sender: string;
      message: string;
      token: string;
      amount: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  receivedMessages(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: UserOperationStruct,
    userOpHash: PromiseOrValue<BytesLike>,
    missingAccountFunds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawDepositTo(
    withdrawAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDeposit(overrides?: CallOverrides): Promise<void>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    ccipSendMessage(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payFeesIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getLastReceivedMessageDetails(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string, string, BigNumber] & {
        messageId: string;
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfReceivedMessages(overrides?: CallOverrides): Promise<BigNumber>;

    getReceivedMessageAt(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string, string, BigNumber] & {
        messageId: string;
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    getReceivedMessageDetails(
      messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    getRouter(overrides?: CallOverrides): Promise<string>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    messageDetail(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        sourceChainSelector: BigNumber;
        sender: string;
        message: string;
        token: string;
        amount: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    receivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "MessageReceived(bytes32,uint64,address,string,tuple)"(
      messageId?: PromiseOrValue<BytesLike> | null,
      sourceChainSelector?: PromiseOrValue<BigNumberish> | null,
      sender?: null,
      message?: null,
      tokenAmount?: null
    ): MessageReceivedEventFilter;
    MessageReceived(
      messageId?: PromiseOrValue<BytesLike> | null,
      sourceChainSelector?: PromiseOrValue<BigNumberish> | null,
      sender?: null,
      message?: null,
      tokenAmount?: null
    ): MessageReceivedEventFilter;

    "MessageSent(bytes32,uint64,address,string,tuple,uint256,uint8)"(
      messageId?: PromiseOrValue<BytesLike> | null,
      destinationChainSelector?: PromiseOrValue<BigNumberish> | null,
      receiver?: null,
      message?: null,
      tokenAmount?: null,
      ccipFee?: null,
      payFeesIn?: null
    ): MessageSentEventFilter;
    MessageSent(
      messageId?: PromiseOrValue<BytesLike> | null,
      destinationChainSelector?: PromiseOrValue<BigNumberish> | null,
      receiver?: null,
      message?: null,
      tokenAmount?: null,
      ccipFee?: null,
      payFeesIn?: null
    ): MessageSentEventFilter;

    "TranseptorAccountInitialized(address,address,address)"(
      entryPoint?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      ccipRouter?: PromiseOrValue<string> | null
    ): TranseptorAccountInitializedEventFilter;
    TranseptorAccountInitialized(
      entryPoint?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      ccipRouter?: PromiseOrValue<string> | null
    ): TranseptorAccountInitializedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ccipSendMessage(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payFeesIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getLastReceivedMessageDetails(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfReceivedMessages(overrides?: CallOverrides): Promise<BigNumber>;

    getReceivedMessageAt(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceivedMessageDetails(
      messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRouter(overrides?: CallOverrides): Promise<BigNumber>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    messageDetail(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    receivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ccipSendMessage(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      payFeesIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLastReceivedMessageDetails(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberOfReceivedMessages(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceivedMessageAt(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceivedMessageDetails(
      messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    messageDetail(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
