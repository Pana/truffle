/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ContractName = string;
export type Abi = (
  | {
      type: "event";
      name: string;
      inputs: {
        name: string;
        type: string | string | string | string | string | string | string | string;
        indexed: boolean;
        [k: string]: any;
      }[];
      anonymous: boolean;
    }
  | {
      type: "constructor";
      inputs: {
        name: string;
        type: string | string | string | string | string | string | string | string;
        [k: string]: any;
      }[];
      stateMutability: "pure" | "view" | "nonpayable" | "payable";
      constant?: boolean;
      payable?: boolean;
    }
  | {
      type: "fallback";
      stateMutability: "pure" | "view" | "nonpayable" | "payable";
      constant?: boolean;
      payable?: boolean;
    }
  | {
      type?: "function";
      name: string;
      inputs: {
        name: string;
        type: string | string | string | string | string | string | string | string;
        [k: string]: any;
      }[];
      outputs?: {
        name: string;
        type: string | string | string | string | string | string | string | string;
        [k: string]: any;
      }[];
      stateMutability: "pure" | "view" | "nonpayable" | "payable";
      constant?: boolean;
      payable?: boolean;
    })[];
export type Bytecode = string;
export type SourceMap = string;
export type Source = string;
export type SourcePath = string;
export type SchemaVersion = string;

/**
 * Describes a contract consumable by Truffle, possibly including deployed instances on networks
 */
export interface ContractObject {
  /**
   * Name used to identify the contract
   */
  contractName?: ContractName;
  /**
   * Interface description returned by compiler for source
   */
  abi: Abi;
  /**
   * Bytecode sent as contract-creation transaction data, with unresolved link references
   */
  bytecode?: Bytecode;
  /**
   * On-chain deployed contract bytecode, with unresolved link references
   */
  deployedBytecode?: Bytecode;
  /**
   * Source mapping for contract-creation transaction data bytecode
   */
  sourceMap?: SourceMap;
  /**
   * Source mapping for contract bytecode
   */
  deployedSourceMap?: SourceMap;
  source?: Source;
  sourcePath?: SourcePath;
  ast?: Ast;
  legacyAST?: LegacyAst;
  compiler?: {
    name?: string;
    version?: string;
    [k: string]: any;
  };
  networks?: {
    [k: string]: NetworkObject;
  };
  schemaVersion?: SchemaVersion;
  updatedAt?: string;
  /**
   * This interface was referenced by `ContractObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]:
    | string
    | number
    | {
        [k: string]: any;
      }
    | any[];
}
export interface Ast {
  [k: string]: any;
}
export interface LegacyAst {
  [k: string]: any;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9]+$".
 */
export interface NetworkObject {
  address?: string;
  transactionHash?: string;
  events?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^0x[a-fA-F0-9]{64}$".
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^0x[a-fA-F0-9]{64}$".
     */
    [k: string]: {
      type: "event";
      name: string;
      inputs: {
        name: string;
        type: string | string | string | string | string | string | string | string;
        indexed: boolean;
        [k: string]: any;
      }[];
      anonymous: boolean;
    };
  };
  links?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
     */
    [k: string]: {
      address?: string;
      events?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^0x[a-fA-F0-9]{64}$".
         *
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^0x[a-fA-F0-9]{64}$".
         */
        [k: string]: {
          type: "event";
          name: string;
          inputs: {
            name: string;
            type: string | string | string | string | string | string | string | string;
            indexed: boolean;
            [k: string]: any;
          }[];
          anonymous: boolean;
        };
      };
      [k: string]: any;
    };
  };
}
