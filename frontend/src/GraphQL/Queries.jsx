import {  gql } from "@apollo/client";

export const TEST_GQL = gql`
    query {
        alignments {
            name
            desc
            index
          }
    }
`