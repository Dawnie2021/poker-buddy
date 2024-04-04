import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SESSION = gql`
  mutation addSession(
    $startDate: String!
    $location: String!
    $results: Float!
    $hoursPlayed: Float!
    $notes: String
  ) {
    addSession(
      sessionId: $sessionId
      startDate: $startDate
      location: $location
      results: $results
      hoursPlayed: $hoursPlayed
      notes: $notes
    ) {
      _id
      startDate
      location
      results
      hoursPlayed
      notes
    }
  }
`;

export const UPDATE_SESSION = gql`
  mutation updateSession(
    $sessionId: ID!
    $startDate: String!
    $location: String!
    $results: Float!
    $hoursPlayed: Float!
    $notes: String
  ) {
    updateSession(
      sessionId: $sessionId
      startDate: $startDate
      location: $location
      results: $results
      hoursPlayed: $hoursPlayed
      notes: $notes
    ) {
      _id
      startDate
      location
      results
      hoursPlayed
      notes
    }
  }
`;

export const DELETE_SESSION = gql`
  mutation deleteSession($sessionId: ID!) {
    deleteSession(sessionId: $sessionId) {
      _id
    }
  }
`;
