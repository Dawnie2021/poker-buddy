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
  type AddSession {
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
    addSessions: [AddSession]
  }


  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
