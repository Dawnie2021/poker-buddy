import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_SESSION = gql`
  query session {
    session {
      _id
      startDate
      location
      results
      hoursPlayed
      notes
    }
  }
`;

export const QUERY_SESSIONS = gql`
  query sessions {
    sessions {
      _id
      startDate
      location
      results
      hoursPlayed
      notes
    }
  }
`;
