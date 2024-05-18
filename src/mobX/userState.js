import { makeAutoObservable } from "mobx"

class UserStateClass {
    userData = {}
    constructor () {
        makeAutoObservable(this)
    }

    setUserData(data) {
        this.userData = data
    }
}

const UserState = new UserStateClass()

export default UserState;