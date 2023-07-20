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
    "\n    query MyProfile {\n      myProfile {\n        email\n        id\n      }\n    }\n  ": types.MyProfileDocument,
    "\n  mutation SendFriendshipRequest($invitedUserEmail: String!) {\n    sendFriendshipRequest(invitedUserEmail: $invitedUserEmail) {\n      invitedUsers {\n        email\n      }\n    }\n  }\n": types.SendFriendshipRequestDocument,
    "\n  query GetFriendshipList {\n    getFriendshipList {\n      invitingUser {\n        lastName\n        firstName\n        email\n        id\n      }\n      invitedUsers {\n        lastName\n        firstName\n        email\n        id\n      }\n    }\n  }\n": types.GetFriendshipListDocument,
    "\n  query GetFriendshipRequests {\n    getFriendshipRequests {\n      invitedUsers {\n        lastName\n        firstName\n      }\n      id\n    }\n  }\n": types.GetFriendshipRequestsDocument,
    "\n  mutation AcceptFriendshipRequest($friendshipId: String!) {\n    acceptFriendshipRequest(friendshipId: $friendshipId) {\n      id\n      acceptInvitation\n    }\n  }\n": types.AcceptFriendshipRequestDocument,
    "\n  mutation DeclineFriendshipRequest($friendshipId: String!) {\n    declineFriendshipRequest(friendshipId: $friendshipId)\n  }\n": types.DeclineFriendshipRequestDocument,
    "\n  mutation DeleteSpending($deleteSpendingId: String!) {\n    deleteSpending(id: $deleteSpendingId) {\n      id\n    }\n  }\n": types.DeleteSpendingDocument,
    "\n  mutation CreateSpending(\n    $title: String!\n    $date: DateTime!\n    $unit: Float!\n    $weight: Float!\n    $categoryName: String!\n  ) {\n    createSpending(\n      title: $title\n      date: $date\n      unit: $unit\n      weight: $weight\n      categoryName: $categoryName\n    ) {\n      title\n      date\n      unit\n      weight\n      category {\n        categoryName\n      }\n    }\n  }\n": types.CreateSpendingDocument,
    "\n  query GET_SPENDING {\n    spendings {\n      category {\n        categoryName\n      }\n      date\n      id\n      localizedDate\n      title\n      unit\n      weight\n    }\n  }\n": types.Get_SpendingDocument,
    "\n  mutation SignOut($signOutId: String!) {\n    signOut(id: $signOutId) {\n      id\n    }\n  }\n": types.SignOutDocument,
    "\n  query MyProfileQuery {\n    myProfile {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n": types.MyProfileQueryDocument,
    "\n  mutation createDonation($amount: Float!) {\n    createDonation(amount: $amount) {\n      amount\n      date\n    }\n  }\n": types.CreateDonationDocument,
    "\n  query Donations {\n    donations {\n      amount\n      date\n    }\n  }\n": types.DonationsDocument,
    "\n  query GetTotalDonations {\n    getTotalDonations\n  }\n": types.GetTotalDonationsDocument,
    "\n  query DonationsByUserId {\n    donationsByUserId {\n      amount\n    }\n  }\n": types.DonationsByUserIdDocument,
    "\n  mutation CreateUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      lastName\n      id\n      firstName\n      email\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n    }\n  }\n": types.SignInDocument,
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
export function graphql(source: "\n    query MyProfile {\n      myProfile {\n        email\n        id\n      }\n    }\n  "): (typeof documents)["\n    query MyProfile {\n      myProfile {\n        email\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendFriendshipRequest($invitedUserEmail: String!) {\n    sendFriendshipRequest(invitedUserEmail: $invitedUserEmail) {\n      invitedUsers {\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SendFriendshipRequest($invitedUserEmail: String!) {\n    sendFriendshipRequest(invitedUserEmail: $invitedUserEmail) {\n      invitedUsers {\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFriendshipList {\n    getFriendshipList {\n      invitingUser {\n        lastName\n        firstName\n        email\n        id\n      }\n      invitedUsers {\n        lastName\n        firstName\n        email\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFriendshipList {\n    getFriendshipList {\n      invitingUser {\n        lastName\n        firstName\n        email\n        id\n      }\n      invitedUsers {\n        lastName\n        firstName\n        email\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFriendshipRequests {\n    getFriendshipRequests {\n      invitedUsers {\n        lastName\n        firstName\n      }\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetFriendshipRequests {\n    getFriendshipRequests {\n      invitedUsers {\n        lastName\n        firstName\n      }\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AcceptFriendshipRequest($friendshipId: String!) {\n    acceptFriendshipRequest(friendshipId: $friendshipId) {\n      id\n      acceptInvitation\n    }\n  }\n"): (typeof documents)["\n  mutation AcceptFriendshipRequest($friendshipId: String!) {\n    acceptFriendshipRequest(friendshipId: $friendshipId) {\n      id\n      acceptInvitation\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeclineFriendshipRequest($friendshipId: String!) {\n    declineFriendshipRequest(friendshipId: $friendshipId)\n  }\n"): (typeof documents)["\n  mutation DeclineFriendshipRequest($friendshipId: String!) {\n    declineFriendshipRequest(friendshipId: $friendshipId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSpending($deleteSpendingId: String!) {\n    deleteSpending(id: $deleteSpendingId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSpending($deleteSpendingId: String!) {\n    deleteSpending(id: $deleteSpendingId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSpending(\n    $title: String!\n    $date: DateTime!\n    $unit: Float!\n    $weight: Float!\n    $categoryName: String!\n  ) {\n    createSpending(\n      title: $title\n      date: $date\n      unit: $unit\n      weight: $weight\n      categoryName: $categoryName\n    ) {\n      title\n      date\n      unit\n      weight\n      category {\n        categoryName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSpending(\n    $title: String!\n    $date: DateTime!\n    $unit: Float!\n    $weight: Float!\n    $categoryName: String!\n  ) {\n    createSpending(\n      title: $title\n      date: $date\n      unit: $unit\n      weight: $weight\n      categoryName: $categoryName\n    ) {\n      title\n      date\n      unit\n      weight\n      category {\n        categoryName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_SPENDING {\n    spendings {\n      category {\n        categoryName\n      }\n      date\n      id\n      localizedDate\n      title\n      unit\n      weight\n    }\n  }\n"): (typeof documents)["\n  query GET_SPENDING {\n    spendings {\n      category {\n        categoryName\n      }\n      date\n      id\n      localizedDate\n      title\n      unit\n      weight\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignOut($signOutId: String!) {\n    signOut(id: $signOutId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation SignOut($signOutId: String!) {\n    signOut(id: $signOutId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyProfileQuery {\n    myProfile {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query MyProfileQuery {\n    myProfile {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createDonation($amount: Float!) {\n    createDonation(amount: $amount) {\n      amount\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation createDonation($amount: Float!) {\n    createDonation(amount: $amount) {\n      amount\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Donations {\n    donations {\n      amount\n      date\n    }\n  }\n"): (typeof documents)["\n  query Donations {\n    donations {\n      amount\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTotalDonations {\n    getTotalDonations\n  }\n"): (typeof documents)["\n  query GetTotalDonations {\n    getTotalDonations\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DonationsByUserId {\n    donationsByUserId {\n      amount\n    }\n  }\n"): (typeof documents)["\n  query DonationsByUserId {\n    donationsByUserId {\n      amount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      lastName\n      id\n      firstName\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      lastName\n      id\n      firstName\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;