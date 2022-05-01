const User = require('./../../app/models/User')

describe("Unit Tests for User class", () =>{
    test('Create an User Object', () =>{
        const user = new User(1, "RicardoPerales", "Ricardo", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("RicardoPerales")
        expect(user.name).toBe("Ricardo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})