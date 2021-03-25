import gql from 'graphql-tag'

export const GET_ALL_USERS_QUERY = gql`
  query getAllUsers {
    users {
      name
      email
    }
  }
`