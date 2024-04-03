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
  type Session {
  _id: ID
  startDate: String
  endDate: String
  location: String
  results: Float
  hoursPlayed: Float
  notes: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    Sessions: [Session]
  }


  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addSession(startDate: String, endDate: String, location: String, results: Float,  hoursPlayed: Float,  notes: String): Session   
    updateSession(id: ID, startDate: String, endDate: String, location: String, results: Float,  hoursPlayed: Float,  notes: String): Session
    deleteSession(sessionId: ID!): Session  
  }
`;



module.exports = typeDefs;
