/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.0
  Forc version: 0.62.0
  Fuel-Core version: 0.31.0
*/

import {
  decompressBytecode,
  InputValue,
  Predicate,
  PredicateParams,
  Provider,
} from 'fuels';

export type PredicateConfigurables = undefined;

export type PredicateInputs = [];

export type PredicateParameters = Omit<
  PredicateParams<PredicateInputs, PredicateConfigurables>,
  'abi' | 'bytecode'
>;

const abi = {
  encoding: '1',
  types: [
    {
      typeId: 0,
      type: 'bool',
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [],
      name: 'main',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
      attributes: null,
    },
  ],
  loggedTypes: [],
  messagesTypes: [],
  configurables: [],
};

const bytecode = decompressBytecode(
  'H4sIAAAAAAAAA5P6YMBQwsDAxAABEbH/DzAK/P/PIPUmgEHhhzFDxO8HTAG/H7CA1Eg5X2BQcWBgmMrAwDiNgwGsRsr5AYPUFwEGqZ8MDDOAYtOBcl4/GBgAs7XHrVgAAAA='
);

export class Predicate extends Predicate<
  PredicateInputs,
  PredicateConfigurables
> {
  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(params: PredicateParameters) {
    super({ abi, bytecode, ...params });
  }
}
