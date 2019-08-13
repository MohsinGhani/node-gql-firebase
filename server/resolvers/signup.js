
var admin = require("firebase-admin");

const signupResolvers = {
    Mutation: {
        signup: async (parent, args, context, info) => {
            const { username, email, password, userRole } = args
            const result = await admin.auth().createUser({
                email,
                emailVerified: false,
                // phoneNumber: '+11234567890',
                password: password,
                displayName: username,
                photoURL: 'http://www.example.com/12345678/photo.png',
                disabled: false
            })

            if (result && result.uid) {
                const { uid, email, displayName, } = result
                let currentUser = {
                    uid, username: displayName, email, userRole: 'ADMIN'
                }
                return currentUser
            }
            else throw new Error(result);
        }
    }
}

module.exports = { signupResolvers }