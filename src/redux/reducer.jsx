



// const LoginReducer=function(state={computer:20},action){
//     switch(action.type){
//         default:
//         return state
//     }

// }
// export {LoginReducer}  
import * as types from './action.type'
let innitalState = {
    isAuth: false,
    user: '',
    pwd: '',
    msg: '',
    type: ''
}
export default function user(state = innitalState, action) {
    switch (action.type) {
        case types.REGISTER:
            return { ...state, isAuth: true, msg: '', ...action.payload }
        case types.ERROR:
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state

    }

}