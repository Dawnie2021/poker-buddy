const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type ManageSession {
  _id: ID
  startDate: String
  endDate: String
  location: String
  results: Int
  hoursPlayed: Int
  notes: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    manageSessions: [ManageSession]
  }


  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
