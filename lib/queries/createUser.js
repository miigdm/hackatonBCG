import { gql } from '@apollo/client';

export default gql`
mutation user($fullname: String!, $email: String!, $password: String!, $phoneNumber: String!, $direction: String!, $businessCategory: String!, $roleId: Int!) {
    createUser(
      input: {user: {fullname: $fullname, email: $email, password: $password, phoneNumber: $phoneNumber, direction: $direction, businessCategory: $businessCategory, roleId: $roleId}, clientMutationId: "id"}
    ) {
      clientMutationId
      user {
        id
      }
    }
  }
  
`