const { gql } = require("apollo-server-express");

const signinSchema = gql`
 extend type Query{
    user:User!
 }

 extend type Mutation {
    signin(
        email:String!
        password:String!
      ): signInConnection!
    }
`;

module.exports = { signinSchema }