import { gql } from "@apollo/client";


export const LOGIN_QUERY= gql`
mutation($email: String!, $password: String!) {
    adminLogin(input: { email: $email, password: $password }) {
      data {
        token_type
        access_token
        user {
          uuid
          first_name
          last_name
        }
      }
      meta {
        status
        message
        message_code
        status_code
      }
    }
  }`
