
import { gql } from '@apollo/client';

export default gql`{
    allOrders(orderBy:DATE_DESC) {
      edges {
        node {
          id
          date
          description
          quantity
          categoryByCategoryId {
            id
            name
          }
          transactionsByOrderId(first: 1, orderBy: ID_DESC) {
            edges {
              node {
                id
                actionByActionId {
                  id
                  name
                }
                userByUserId {
                  id
                  fullname
                  businessCategory
                  roleByRoleId {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
