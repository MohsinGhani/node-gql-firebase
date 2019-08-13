const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require("cors");
const bodyparser = require("body-parser");

const { schema } = require('./server/schema');
const { resolvers } = require('./server/resolvers');

var admin = require("firebase-admin");
var serviceAccount = require('./server/config/firebase-admin/credentials.json');

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyparser.json())

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {},
});

server.applyMiddleware({ app, path: '/graphql' });


// firebase config
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-demo-777.firebaseio.com"
});

app.listen(port, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
});
