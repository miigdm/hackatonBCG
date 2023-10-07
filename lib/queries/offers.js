
import { gql } from '@apollo/client';

export default gql`{
    allTransactions(condition: {}, filter: {actionId: {in: 1}}) {
      edges {
        node {
          orderByOrderId {
            id
            availability
            description
            quantity
            date
            categoryByCategoryId {
              id
              name
            }
            userByUserId {
              id
              fullname
              direction
            }
          }
          id
          actionByActionId {
            id
            name
          }
        }
      }
    }
  }
  
`