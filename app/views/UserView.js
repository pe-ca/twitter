const UserService = require('./../services/UserService')

class UserView {
    static createUser(payload){
        if(payload === null){
            return { error: "El payload no existe" }
        }
        if(typeof payload.username !== 'string' && typeof payload.name !== 'string' && typeof payload.id !== 'int'){
            return { error: "Los valores de las propiedades necesitan tener un valor valido"}
        }
        if(payload.username === undefined || payload.name === undefined || payload.id === undefined){
            return { error: "Los valores de las propiedades necesitan tener un valor valido"}
        }
        return UserService.create(payload.id, payload.username, payload.name)
    }
}

module.exports = UserView