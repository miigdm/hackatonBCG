
import { gql } from '@apollo/client';
import request  from '../requests/request';

export default (ids)=>{
    let query = `{
        allTransactions(filter: { id: { in: ${JSON.stringify(ids)} } }) {
          edges {
            node {
              id
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
              actionByActionId {
                id
                name
              }
            }
          }
        }
      }`
      

    let data = {
        "query": query
    }
      
   
    return request(data)
}