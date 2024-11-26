/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.0
  Forc version: 0.66.4
  Fuel-Core version: 0.40.0
*/

import { Contract, ContractFactory, decompressBytecode } from 'fuels';
import type {
  Provider,
  Account,
  DeployContractOptions,
  DeployContractResult,
} from 'fuels';

import { DummyStablecoin } from './DummyStablecoin';

const bytecode = decompressBytecode(
  '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'
);

export class DummyStablecoinFactory extends ContractFactory {
  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, DummyStablecoin.abi, accountOrProvider);
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: DummyStablecoin.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy(
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<DummyStablecoin>> {
    const factory = new DummyStablecoinFactory(wallet);
    return factory.deploy(options);
  }
}
