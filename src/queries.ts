import {gql} from '@apollo/client'

export const TOURS_QUERY = gql`
query {
    rockets {
        id
        description
        name
    }
}
`