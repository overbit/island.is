import gql from 'graphql-tag'

export const GET_SUPPORT_QNA_QUERY = gql`
  query GetSupportQNA($input: GetSupportQNAInput!) {
    getSupportQNA(input: $input) {
      items {
        id
        question
        answer
        category {
          title
        }
      }
    }
  }
`
