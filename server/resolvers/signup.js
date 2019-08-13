
var admin = require("firebase-admin");

const signupResolvers = {
    Mutation: {
        signup: async (parent, args, context, info) => {
            const { username, email, password, userRole } = args
            admin.auth().createUser({
                email,
                emailVerified: false,
                // phoneNumber: '+11234567890',
                password: password,
                displayName: username,
                photoURL: 'http://www.example.com/12345678/photo.png',
                disabled: false
            })
                .then((userRecord) => {
                    // See the UserRecord reference doc for the contents of userRecord.
                    const {uid, email, displayName, } = userRecord
                    let user = {
                        uid, username: displayName, email, userRole: 'ADMIN'
                    }
                    console.log('Successfully created new user:', user);
                    return user
                })
                .catch((error) => {
                    console.log('Error creating new user:', error.message);
                });
                return {
                    username: "asdsad",
                    email: "mohsin@gmail.com"
                }
        }
    }
}

module.exports = { signupResolvers }