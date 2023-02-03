/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation CreateSpending(\n    $title: String!\n    $date: DateTime!\n    $unit: Float!\n    $weight: Float!\n    $categoryName: String!\n  ) {\n    createSpending(\n      title: $title\n      date: $date\n      unit: $unit\n      weight: $weight\n      categoryName: $categoryName\n    ) {\n      title\n      date\n      unit\n      weight\n      category {\n        categoryName\n      }\n    }\n  }\n": types.CreateSpendingDocument,
    "\n  query GET_SPENDING {\n    spendings {\n      category {\n        categoryName\n      }\n      date\n      id\n      localizedDate\n      title\n      unit\n      weight\n    }\n  }\n": types.Get_SpendingDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSpending(\n    $title: String!\n    $date: DateTime!\n    $unit: Float!\n    $weight: Float!\n    $categoryName: String!\n  ) {\n    createSpending(\n      title: $title\n      date: $date\n      unit: $unit\n      weight: $weight\n      categoryName: $categoryName\n    ) {\n      title\n      date\n      unit\n      weight\n      category {\n        categoryName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSpending(\n    $title: String!\n    $date: DateTime!\n    $unit: Float!\n    $weight: Float!\n    $categoryName: String!\n  ) {\n    createSpending(\n      title: $title\n      date: $date\n      unit: $unit\n      weight: $weight\n      categoryName: $categoryName\n    ) {\n      title\n      date\n      unit\n      weight\n      category {\n        categoryName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_SPENDING {\n    spendings {\n      category {\n        categoryName\n      }\n      date\n      id\n      localizedDate\n      title\n      unit\n      weight\n    }\n  }\n"): (typeof documents)["\n  query GET_SPENDING {\n    spendings {\n      category {\n        categoryName\n      }\n      date\n      id\n      localizedDate\n      title\n      unit\n      weight\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;