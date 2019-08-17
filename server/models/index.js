const User = `
 type User{
    uid: String!
    username: String!
    email: String!
    role: [UserRole!]
 }
`;

const UserRole = `
 enum UserRole{
   ADMIN
   MANAGER
   SALES_REP
   CUSTOMER_SERVICE
 }
`

const signInConnection = `
 type signInConnection{
   user: User!,
   jwt: String!
 }
`

module.exports = { User, UserRole, signInConnection }