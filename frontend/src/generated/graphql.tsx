import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Uuid */
  Uuid: any;
};

export type Query = {
  __typename?: 'Query';
  listStartups: Array<Startup>;
  startup: Startup;
};


export type QueryStartupArgs = {
  selectedId: Scalars['Uuid'];
};


export type MutationRoot = {
  __typename?: 'MutationRoot';
  generateStartup: Startup;
};


export type MutationRootGenerateStartupArgs = {
  keyword: Scalars['String'];
};

/** A startup that is about to disrupt an industry */
export type Startup = {
  __typename?: 'Startup';
  id: Scalars['Uuid'];
  name: Scalars['String'];
  keyword: Scalars['String'];
  valueProposition: Scalars['String'];
  colorScheme?: Maybe<Array<Scalars['String']>>;
};

export type GenerateStartupMutationVariables = {
  keyword: Scalars['String'];
};


export type GenerateStartupMutation = (
  { __typename?: 'MutationRoot' }
  & { generateStartup: (
    { __typename?: 'Startup' }
    & Pick<Startup, 'id' | 'name' | 'valueProposition' | 'keyword' | 'colorScheme'>
  ) }
);

export type ListStartupsQueryVariables = {};


export type ListStartupsQuery = (
  { __typename?: 'Query' }
  & { listStartups: Array<(
    { __typename?: 'Startup' }
    & Pick<Startup, 'id' | 'name' | 'valueProposition' | 'colorScheme' | 'keyword'>
  )> }
);


export const GenerateStartupDocument = gql`
    mutation generateStartup($keyword: String!) {
  generateStartup(keyword: $keyword) {
    id
    name
    valueProposition
    keyword
    colorScheme
  }
}
    `;
export type GenerateStartupMutationFn = ApolloReactCommon.MutationFunction<GenerateStartupMutation, GenerateStartupMutationVariables>;
export type GenerateStartupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GenerateStartupMutation, GenerateStartupMutationVariables>, 'mutation'>;

    export const GenerateStartupComponent = (props: GenerateStartupComponentProps) => (
      <ApolloReactComponents.Mutation<GenerateStartupMutation, GenerateStartupMutationVariables> mutation={GenerateStartupDocument} {...props} />
    );
    
export type GenerateStartupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<GenerateStartupMutation, GenerateStartupMutationVariables>
    } & TChildProps;
export function withGenerateStartup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GenerateStartupMutation,
  GenerateStartupMutationVariables,
  GenerateStartupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, GenerateStartupMutation, GenerateStartupMutationVariables, GenerateStartupProps<TChildProps, TDataName>>(GenerateStartupDocument, {
      alias: 'generateStartup',
      ...operationOptions
    });
};
export type GenerateStartupMutationResult = ApolloReactCommon.MutationResult<GenerateStartupMutation>;
export type GenerateStartupMutationOptions = ApolloReactCommon.BaseMutationOptions<GenerateStartupMutation, GenerateStartupMutationVariables>;
export const ListStartupsDocument = gql`
    query listStartups {
  listStartups {
    id
    name
    valueProposition
    colorScheme
    keyword
  }
}
    `;
export type ListStartupsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListStartupsQuery, ListStartupsQueryVariables>, 'query'>;

    export const ListStartupsComponent = (props: ListStartupsComponentProps) => (
      <ApolloReactComponents.Query<ListStartupsQuery, ListStartupsQueryVariables> query={ListStartupsDocument} {...props} />
    );
    
export type ListStartupsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ListStartupsQuery, ListStartupsQueryVariables>
    } & TChildProps;
export function withListStartups<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ListStartupsQuery,
  ListStartupsQueryVariables,
  ListStartupsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ListStartupsQuery, ListStartupsQueryVariables, ListStartupsProps<TChildProps, TDataName>>(ListStartupsDocument, {
      alias: 'listStartups',
      ...operationOptions
    });
};
export type ListStartupsQueryResult = ApolloReactCommon.QueryResult<ListStartupsQuery, ListStartupsQueryVariables>;