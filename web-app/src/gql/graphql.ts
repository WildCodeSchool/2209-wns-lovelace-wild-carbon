/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AppUser = {
  __typename?: 'AppUser';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  invitedUsers: Array<Friendship>;
  invitingUser: Array<Friendship>;
  lastName: Scalars['String'];
  spendings: Array<Spending>;
};

export type Article = {
  __typename?: 'Article';
  category: Category;
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  articles: Array<Article>;
  categoryName: Scalars['String'];
  id: Scalars['ID'];
  spendings: Array<Spending>;
};

export type Friendship = {
  __typename?: 'Friendship';
  acceptInvitation: Scalars['Boolean'];
  id: Scalars['ID'];
  invitedUsers: AppUser;
  invitingUser: AppUser;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendshipRequest: Friendship;
  createArticle: Article;
  createSpending: Spending;
  createUser: AppUser;
  declineFriendshipRequest: Scalars['Boolean'];
  deleteArticle: Article;
  deleteSpending: Spending;
  sendFriendshipRequest: Friendship;
  signIn: AppUser;
  signOut: AppUser;
  updateArticle: Article;
  updateSpending: Spending;
};


export type MutationAcceptFriendshipRequestArgs = {
  friendshipId: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  categoryName: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateSpendingArgs = {
  categoryName: Scalars['String'];
  date: Scalars['DateTime'];
  title: Scalars['String'];
  unit: Scalars['Float'];
  weight: Scalars['Float'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeclineFriendshipRequestArgs = {
  friendshipId: Scalars['String'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSpendingArgs = {
  id: Scalars['String'];
};


export type MutationSendFriendshipRequestArgs = {
  invitedUserEmail: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignOutArgs = {
  id: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  categoryName: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationUpdateSpendingArgs = {
  categoryName: Scalars['String'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  unit: Scalars['Float'];
  weight: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  articles: Array<Article>;
  getFriendshipList: Array<Friendship>;
  getFriendshipRequests: Array<Friendship>;
  getUserById: AppUser;
  getUsers: Array<AppUser>;
  myProfile: AppUser;
  spendings: Array<Spending>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};

export type Spending = {
  __typename?: 'Spending';
  category: Category;
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  localizedDate: Scalars['String'];
  title: Scalars['String'];
  unit: Scalars['Float'];
  user: AppUser;
  weight: Scalars['Float'];
};

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { __typename?: 'Query', myProfile: { __typename?: 'AppUser', email: string, id: string } };

export type SendFriendshipRequestMutationVariables = Exact<{
  invitedUserEmail: Scalars['String'];
}>;


export type SendFriendshipRequestMutation = { __typename?: 'Mutation', sendFriendshipRequest: { __typename?: 'Friendship', invitedUsers: { __typename?: 'AppUser', email: string } } };

export type GetFriendshipListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendshipListQuery = { __typename?: 'Query', getFriendshipList: Array<{ __typename?: 'Friendship', invitingUser: { __typename?: 'AppUser', lastName: string, firstName: string, email: string, id: string }, invitedUsers: { __typename?: 'AppUser', lastName: string, firstName: string, email: string, id: string } }> };

export type GetFriendshipRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendshipRequestsQuery = { __typename?: 'Query', getFriendshipRequests: Array<{ __typename?: 'Friendship', id: string, invitedUsers: { __typename?: 'AppUser', lastName: string, firstName: string } }> };

export type AcceptFriendshipRequestMutationVariables = Exact<{
  friendshipId: Scalars['String'];
}>;


export type AcceptFriendshipRequestMutation = { __typename?: 'Mutation', acceptFriendshipRequest: { __typename?: 'Friendship', id: string, acceptInvitation: boolean } };

export type DeclineFriendshipRequestMutationVariables = Exact<{
  friendshipId: Scalars['String'];
}>;


export type DeclineFriendshipRequestMutation = { __typename?: 'Mutation', declineFriendshipRequest: boolean };

export type CreateSpendingMutationVariables = Exact<{
  title: Scalars['String'];
  date: Scalars['DateTime'];
  unit: Scalars['Float'];
  weight: Scalars['Float'];
  categoryName: Scalars['String'];
}>;


export type CreateSpendingMutation = { __typename?: 'Mutation', createSpending: { __typename?: 'Spending', title: string, date: any, unit: number, weight: number, category: { __typename?: 'Category', categoryName: string } } };

export type SpendingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SpendingsQuery = { __typename?: 'Query', spendings: Array<{ __typename?: 'Spending', weight: number, title: string, unit: number, localizedDate: string, category: { __typename?: 'Category', categoryName: string } }> };

export type SignOutMutationVariables = Exact<{
  signOutId: Scalars['String'];
}>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: { __typename?: 'AppUser', id: string } };

export type MyProfileQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQueryQuery = { __typename?: 'Query', myProfile: { __typename?: 'AppUser', id: string, email: string, firstName: string, lastName: string } };

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'AppUser', lastName: string, id: string, firstName: string, email: string } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AppUser', id: string, email: string } };


export const MyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MyProfileQuery, MyProfileQueryVariables>;
export const SendFriendshipRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendFriendshipRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invitedUserEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendFriendshipRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"invitedUserEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invitedUserEmail"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invitedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SendFriendshipRequestMutation, SendFriendshipRequestMutationVariables>;
export const GetFriendshipListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFriendshipList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriendshipList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invitingUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetFriendshipListQuery, GetFriendshipListQueryVariables>;
export const GetFriendshipRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFriendshipRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriendshipRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invitedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetFriendshipRequestsQuery, GetFriendshipRequestsQueryVariables>;
export const AcceptFriendshipRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptFriendshipRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendshipId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptFriendshipRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendshipId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendshipId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acceptInvitation"}}]}}]}}]} as unknown as DocumentNode<AcceptFriendshipRequestMutation, AcceptFriendshipRequestMutationVariables>;
export const DeclineFriendshipRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeclineFriendshipRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendshipId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"declineFriendshipRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendshipId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendshipId"}}}]}]}}]} as unknown as DocumentNode<DeclineFriendshipRequestMutation, DeclineFriendshipRequestMutationVariables>;
export const CreateSpendingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSpending"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"weight"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSpending"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"Argument","name":{"kind":"Name","value":"unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unit"}}},{"kind":"Argument","name":{"kind":"Name","value":"weight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"weight"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSpendingMutation, CreateSpendingMutationVariables>;
export const SpendingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Spendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"localizedDate"}}]}}]}}]} as unknown as DocumentNode<SpendingsQuery, SpendingsQueryVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signOutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signOutId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const MyProfileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyProfileQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<MyProfileQueryQuery, MyProfileQueryQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;