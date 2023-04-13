import { gql } from "@apollo/client";

const UserFragment = gql`
  fragment UserData on User {
    id
    name
    email
    phone
    website
  }
`;

export const ADD_USER = gql`
  ${UserFragment}
  mutation AddTodo($title: String!, $completed: Boolean!) {
    createTodo(input: { title: $title, completed: $completed }) {
      id
      title
      completed
      user {
        ...UserData
      }
    }
  }
`;
