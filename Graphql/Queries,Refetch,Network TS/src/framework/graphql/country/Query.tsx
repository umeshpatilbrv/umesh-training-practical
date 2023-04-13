import { gql } from "@apollo/client";

export interface CountryData {
  country: {
  name: string;
  emoji: string;
  };
  }

export interface CountryVars {
  code: string;
  }

export const COUNTRY = gql`
  query Country ($code: ID!) {
    country(code:$code) {
      name
      emoji
    }
  }
`;
