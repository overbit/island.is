import gql from 'graphql-tag'
import { slices } from './fragments'

export const GET_SUPPORT_QNA_QUERY = gql`
  query GetSupportQNAs($input: GetSupportQNAInput!) {
    getSupportQNAs(input: $input) {
      items {
        id
        question
        answer {
          ...AllSlices
        }
        category {
          title
        }
      }
    }
  }
  ${slices}
`
