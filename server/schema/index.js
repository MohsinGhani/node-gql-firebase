const { gql } = require('apollo-server-express');
const { signinSchema } = require('./signin');
const { signupSchema } = require('./signup');
const { User, UserRole, signInConnection } = require('../models')
const linkSchema = gql`
type Query {
_: Boolean
}
type Mutation {
_: Boolean
}
type Subscription {
_: Boolean
}
`;

const schema = [linkSchema, signinSchema, User, UserRole, signupSchema, signInConnection];

module.exports = { schema }
