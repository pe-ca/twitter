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

    test ('Add getters', () =>{
        const user = new User(1, "RicardoPerales", "Ricardo", "Bio")

        expect(user.getUsername).toBe("RicardoPerales")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test ('Add setters', () =>{
        const user = new User(1, "RicardoPerales", "Ricardo", "Bio")

        user.setUsername = "Ricardo"
        expect(user.username).toBe("Ricardo")

        user.setBio = "New bio"
        expect(user.getBio).toBe("New bio")
    })
})