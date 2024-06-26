const typeDefs = `#graphql
scalar Date


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
    startDate: Date!
    location: String
    results: Float
    hoursPlayed: Float
    notes: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    sessions: [Session]
    session: Session
  }


  type Mutation {
    addUser(
      email:String!, 
      username:String!, 
      password:String!
    ): Auth

    login(
      email:String!, 
      password:String!
    ): Auth

    addSession(
      startDate: String!,  
      location: String!, 
      results: Float!,  
      hoursPlayed: Float!,  
      notes: String
    ): Session  

    updateSession(
      sessionId: ID!, 
      startDate: String!, 
      location: String!, 
      results: Float!,  
      hoursPlayed: Float!,  
      notes: String
    ): Session
    
    deleteSession(sessionId: ID!): Session  
  }
`;

module.exports = typeDefs;
