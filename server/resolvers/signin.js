const admin = require("firebase-admin");
const fetch = require('node-fetch');
const { signIn } = require("./../config/firebase-admin/restAPIs/index")

const signinResolvers = {
    Mutation: {
        signin: async (parent, args, context, info) => {
            const { email, password } = args
            const result = await fetch(signIn, {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            })
            const user = await result.json()

            if (user && user.idToken) {
                const { localId } = user
                return { uid: localId }
            }
            else throw new Error(user);
        }
    }
}

module.exports = { signinResolvers }