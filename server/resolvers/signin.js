const admin = require("firebase-admin");
const fetch = require('node-fetch');
const { signIn } = require("./../config/firebase-admin/restAPIs/index")
const { client } = require('../config/pg/pgClient');

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
                const { localId, idToken } = user
                const gettingDataFromPg = await client.query(`
                    SELECT * FROM public."User" WHERE uid='${localId}'
                `)
                const { uid, username, email, role } = gettingDataFromPg.rows[0]
                return { user: { uid, username, email, role }, jwt: idToken }
            }
            else throw new Error(user);
        }
    }
}

module.exports = { signinResolvers }