
import { gql } from '@apollo/client';

export default gql`query MyQuery {
    allGetOffers {
      edges {
        node {
          id
        }
      }
    }
  }
  
  
`