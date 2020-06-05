import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
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

/**
 * __useGenerateStartupMutation__
 *
 * To run a mutation, you first call `useGenerateStartupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateStartupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateStartupMutation, { data, loading, error }] = useGenerateStartupMutation({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useGenerateStartupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GenerateStartupMutation, GenerateStartupMutationVariables>) {
        return ApolloReactHooks.useMutation<GenerateStartupMutation, GenerateStartupMutationVariables>(GenerateStartupDocument, baseOptions);
      }
export type GenerateStartupMutationHookResult = ReturnType<typeof useGenerateStartupMutation>;
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

/**
 * __useListStartupsQuery__
 *
 * To run a query within a React component, call `useListStartupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStartupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStartupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListStartupsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListStartupsQuery, ListStartupsQueryVariables>) {
        return ApolloReactHooks.useQuery<ListStartupsQuery, ListStartupsQueryVariables>(ListStartupsDocument, baseOptions);
      }
export function useListStartupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListStartupsQuery, ListStartupsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListStartupsQuery, ListStartupsQueryVariables>(ListStartupsDocument, baseOptions);
        }
export type ListStartupsQueryHookResult = ReturnType<typeof useListStartupsQuery>;
export type ListStartupsLazyQueryHookResult = ReturnType<typeof useListStartupsLazyQuery>;
export type ListStartupsQueryResult = ApolloReactCommon.QueryResult<ListStartupsQuery, ListStartupsQueryVariables>;