import { gql } from "@apollo/client";

const User_Fragment = gql`
  fragment UserData on User {
    id
    name
    email
  }
`;

export const ADD_USER = gql`
  ${User_Fragment}
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
