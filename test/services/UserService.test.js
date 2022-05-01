const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", ()=>{{
    test("1. Create a new user using the userService", () =>{
        const user = UserService.create(1, "RicardoPerales", "Ricardo")

        expect(user.username).toBe("RicardoPerales")
        expect(user.name).toBe("Ricardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
}})