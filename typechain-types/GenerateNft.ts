/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export declare namespace GenerateNft {
  export type TokenImageStruct = {
    image: PromiseOrValue<string>;
    atributes: PromiseOrValue<string>[];
  };

  export type TokenImageStructOutput = [string, string[]] & {
    image: string;
    atributes: string[];
  };
}

export interface GenerateNftInterface extends utils.Interface {
  functions: {
    'generateImage()': FunctionFragment;
    'getDataUri(uint256)': FunctionFragment;
    'getNames()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'generateImage' | 'getDataUri' | 'getNames',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'generateImage', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getDataUri',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getNames', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'generateImage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDataUri', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getNames', data: BytesLike): Result;

  events: {};
}

export interface GenerateNft extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GenerateNftInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    generateImage(overrides?: CallOverrides): Promise<[string]>;

    getDataUri(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [GenerateNft.TokenImageStructOutput] & {
        tokenImage: GenerateNft.TokenImageStructOutput;
      }
    >;

    getNames(overrides?: CallOverrides): Promise<[string[]]>;
  };

  generateImage(overrides?: CallOverrides): Promise<string>;

  getDataUri(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<GenerateNft.TokenImageStructOutput>;

  getNames(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    generateImage(overrides?: CallOverrides): Promise<string>;

    getDataUri(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<GenerateNft.TokenImageStructOutput>;

    getNames(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    generateImage(overrides?: CallOverrides): Promise<BigNumber>;

    getDataUri(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getNames(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    generateImage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDataUri(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getNames(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
