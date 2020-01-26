import gql from "graphql-tag";

export const GET_REPOSITORIES = gql`
  query Reps($quer: String!) {
    search(query: $quer, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            id
            name
            viewerHasStarred
            url
            isArchived
            owner {
            login
            avatarUrl
          }
          }
        }
      }
    }
  }
`;