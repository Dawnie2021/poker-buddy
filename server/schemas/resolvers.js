const { GraphQLError } = require("graphql");
const { User, Session } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLDate } = require("graphql-iso-date");

const resolvers = {
  Date: GraphQLDate,
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new GraphQLError("You need to be logged in!");
    },
    sessions: async () => {
      return Session.find();
    },
    session: async (_, args) => {
      return Session.findById(args.id);
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addSession: async (_, args) => {
      console.log(args);
      return Session.create(args);
    },

    updateSession: async (
      parent,
      { id, startDate, endDate, location, results, hoursPlayed, notes }
    ) => {
      return await Session.findByIdAndUpdate(
        id,
        { $set: { startDate, endDate, location, results, hoursPlayed, notes } },
        {
          new: true,
        }
      );
    },

    deleteSession: async (parent, { sessionId }) => {
      return Session.findOneAndDelete({ _id: sessionId });
    },
  },
};

module.exports = resolvers;
