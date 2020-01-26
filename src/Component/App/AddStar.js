import gql from "graphql-tag";
import {Mutation} from "@apollo/react-components";
import React from "react";
import StarIcon from '@material-ui/icons/Star';

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const removeStarquery = gql`
mutation RemoveStar($id:ID!){
   removeStar(input:{starrableId:$id}){
    starrable{
      id
      viewerHasStarred
    }
  }
}`

export const RemoveStar = ({id}) => (
    <Mutation mutation={removeStarquery} variables={{id}}>
        {removeStar => (
            <StarIcon color="primary" onClick={removeStar} className="hover">
                removestar
            </StarIcon>
        )}
    </Mutation>
);

export const Star = ({id}) => (
    <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
        {starRepository => (
            <StarIcon onClick={starRepository} className="hover">
                star
            </StarIcon>
        )}
    </Mutation>
);

