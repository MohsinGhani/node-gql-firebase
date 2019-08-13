const signinResolvers = {
    Mutation: {
        signin: () => {
            return {
                username: "asdsad",
                email: "mohsin@gmail.com",
                password: 12
            }
        }
    }
}

module.exports = { signinResolvers }