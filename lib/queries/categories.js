
import { gql } from '@apollo/client';

export default gql`{
  allCategories(orderBy:NAME_ASC) {
    edges {
      node {
        id
        name
      }
    }
  }
}
`