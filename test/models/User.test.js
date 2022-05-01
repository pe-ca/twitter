const User = require('./../../app/models/User')

describe("Unit Tests for User class", () =>{
    test('Create an User Object', () =>{
        const user = new User(1, "RicardoPerales", "Ricardo", "Bio", "datCreated", "lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("RicardoPerales")
        expect(user.name).toBe("Ricardo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("datCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    })
})