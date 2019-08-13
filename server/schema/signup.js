const { gql } = require("apollo-server-express");

const signupSchema = gql`

 extend type Mutation {
    signup(
       username: String!
       email:String!
       password:String!
       userRole: UserRole!
      ): User!
    }
`;

module.exports = { signupSchema }