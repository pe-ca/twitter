const User = require('../../app/models/User')
const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", ()=>{{
    test("1. Create a new user using the userService", () =>{
        const user = UserService.create(1, "RicardoPerales", "Ricardo")

        expect(user.username).toBe("RicardoPerales")
        expect(user.name).toBe("Ricardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", ()=>{
        const user = UserService.create(1, "RicardoPerales", "Ricardo")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("RicardoPerales")
        expect(userInfoInList[2]).toBe("Ricardo")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", ()=>{
        const user = UserService.create(1, "RicardoPerales", "Ricardo")
        UserService.updateUserUsername(user, "RPerales")

        expect(user.username).toBe("RPerales")
    })

    test("4. Given a list of users guve me the list of usernames", ()=>{
        const user1 = UserService.create(1, "RicardoPerales1", "Ricardo")
        const user2 = UserService.create(2, "RicardoPerales2", "Ricardo")
        const user3 = UserService.create(3, "RicardoPerales3", "Ricardo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("RicardoPerales1")
        expect(usernames).toContain("RicardoPerales2")
        expect(usernames).toContain("RicardoPerales3")
    })
}})