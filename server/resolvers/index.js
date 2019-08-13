const { signinResolvers } = require('./signin');
const { signupResolvers } = require('./signup');

const resolvers = [signinResolvers, signupResolvers];

module.exports = { resolvers }
