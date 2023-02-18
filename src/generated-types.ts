import { gql } from 'apollo-angular';
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type BookType = {
  __typename?: 'BookType';
  EditionDate: Scalars['DateTime'];
  author: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['String'];
  title: Scalars['String'];
};

export type CommandType = {
  __typename?: 'CommandType';
  bookId: BookType;
  createdAt: Scalars['DateTime'];
  deliverAt: Scalars['DateTime'];
  deliveryAddress: Scalars['String'];
  id: Scalars['String'];
  quantity: Scalars['Float'];
  userId: UserType;
};

export type CreateCommandInput = {
  bookId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliverAt?: InputMaybe<Scalars['DateTime']>;
  deliveryAddress: Scalars['String'];
  quantity: Scalars['Float'];
  userId: Scalars['String'];
};

export type CreateStarInput = {
  bookId: Scalars['String'];
  notice: Scalars['Float'];
  userId: Scalars['String'];
};

export type HttpResponse = {
  __typename?: 'HttpResponse';
  message: Scalars['String'];
  statusCode: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelCommand: HttpResponse;
  createCommand: HttpResponse;
  createStar: HttpResponse;
  removeBook: HttpResponse;
  removeCommand: HttpResponse;
  removeUser: HttpResponse;
  updateCommand: CommandType;
};


export type MutationCancelCommandArgs = {
  id: Scalars['String'];
};


export type MutationCreateCommandArgs = {
  createCommandInput: CreateCommandInput;
};


export type MutationCreateStarArgs = {
  createStarInput: CreateStarInput;
};


export type MutationRemoveBookArgs = {
  id: Scalars['String'];
};


export type MutationRemoveCommandArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCommandArgs = {
  updateCommandInput: UpdateCommandInput;
};

export type Query = {
  __typename?: 'Query';
  book: BookType;
  books: Array<BookType>;
  command: CommandType;
  commands: Array<CommandType>;
  stars: Array<StarType>;
  user: UserType;
  users: Array<UserType>;
};


export type QueryBookArgs = {
  id: Scalars['String'];
};


export type QueryCommandArgs = {
  id: Scalars['String'];
};


export type QueryStarsArgs = {
  bookId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type StarType = {
  __typename?: 'StarType';
  bookId: BookType;
  notice: Scalars['Float'];
  userId: UserType;
};

export type UpdateCommandInput = {
  bookId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliverAt?: InputMaybe<Scalars['DateTime']>;
  deliveryAddress?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  quantity?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  password: Scalars['String'];
  tel: Scalars['String'];
  username: Scalars['String'];
};

export type Auth = {
  __typename?: 'Auth';
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
}
