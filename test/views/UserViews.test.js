const UserView = require('./../../app/views/UserView')

describe("tests for UserViews", () =>{
    test("Return an error object when try to create a new user with an null payload", () =>{
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })
})