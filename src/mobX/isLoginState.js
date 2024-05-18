import { makeAutoObservable } from "mobx"

class LoginState {
    isLogin = false
    constructor () {
        makeAutoObservable(this)
    }
    setIsLogin () {
        this.isLogin = !this.isLogin
    }
}

const isLoginState = new LoginState()

export default isLoginState;