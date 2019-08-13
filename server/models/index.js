const User = `
 type User{
    uid: String!
    username: String!
    email: String!
    role: UserRole!
 }
`;

const UserRole = `
 enum UserRole{
   ADMIN
   MANAGER
   SALTES_REP
   CUSTOMER_SERVICE
 }
`

module.exports = {User, UserRole}