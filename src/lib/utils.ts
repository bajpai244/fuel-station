import type { z } from 'zod';
import type { ScriptRequest } from '../types';
import type { InputCoinSchema, OutputCoinSchema } from '../lib/schema/api';
import type { ScriptTransactionRequest } from 'fuels';

export const findOutputCoinTypeCoin = (
  scriptRequest: ScriptRequest,
  owner: string,
  assetId: string
): z.infer<typeof OutputCoinSchema> | null => {
  const outputCoinsBelongingToAccount = scriptRequest.outputs.filter(
    (output) => {
      if (output.to === owner) {
        return true;
      }
    }
  );

  if (!outputCoinsBelongingToAccount) {
    return null;
  }

  const outputCoin = outputCoinsBelongingToAccount.find(
    (output) => output.type === 0
  );
  if (!outputCoin) {
    return null;
  }

  if (outputCoin.assetId !== assetId) {
    return null;
  }

  return outputCoin;
};

export const findInputCoinTypeCoin = (
  scriptRequest: ScriptRequest,
  owner: string,
  assetId: string
): z.infer<typeof InputCoinSchema> | null => {
  const inputCoinsBelongingToAccount = scriptRequest.inputs.filter((input) => {
    if (input.type === 0) {
      if (input.owner === owner) {
        return true;
      }
    }
  });

  if (!inputCoinsBelongingToAccount) {
    return null;
  }

  if (inputCoinsBelongingToAccount.length > 1) {
    return null;
  }

  const inputCoin = inputCoinsBelongingToAccount[0];
  if (inputCoin.type !== 0) {
    return null;
  }

  if (inputCoin.assetId !== assetId) {
    return null;
  }

  return inputCoin;
};

export const setRequestFields = (
  request: ScriptTransactionRequest,
  scriptRequest: ScriptRequest
) => {
  request.type = scriptRequest.type;

  // TODO: do explicit type conversion to remove the ts-ignore
  // we are ts-ignoring, because even with different types, it still works
  // @ts-ignore
  request.gasLimit = scriptRequest.gasLimit;
  // @ts-ignore
  request.script = scriptRequest.script;
  // @ts-ignore
  request.scriptData = scriptRequest.scriptData;
  // @ts-ignore
  request.maxFee = scriptRequest.maxFee;

  request.inputs = scriptRequest.inputs;
  request.outputs = scriptRequest.outputs;

  request.witnesses = scriptRequest.witnesses;
};