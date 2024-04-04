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
    $sessionId: ID!
    $startDate: Float!
    $location: String!
    $results: String!
    $hoursPlayed: String!
    $notes: String!
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
    $startDate: Float!
    $location: String!
    $results: String!
    $hoursPlayed: String!
    $notes: String!
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
  mutation deleteSession(
    $sessionId: ID!
    $startDate: Float!
    $location: String!
    $results: String!
    $hoursPlayed: String!
    $notes: String!
  ) {
    deleteSession(
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
