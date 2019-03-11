import * as types from './action.type'

export function errormes(msg) {
    return { msg, type: types.ERROR }
}
export function register_success(data) {
    return { type: types.REGISTER, payload: data }
}
export function register({ user, pws, pws2, type }) {
    if (!user || !pws || !pws2 || !type) {
        return errormes('用户名和密码必须输入')
    }
    if (pws !== pws2) {
        return errormes("两次密码不一致，请重新输入")
    }
    asiox.post('/register', { user, pws, pws2, type }).then(res => {
        if (res.status === 0 && res.status == 200) {
            dispath(register_success({ user, pws, pws2, type }))

        } else {
            dispath(errormes("注册失败"))
        }
    })

}