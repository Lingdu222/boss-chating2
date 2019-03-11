/**
 * 这个组件只做一些用户的信息，并做一些跳转
 */
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Authroute extends React.Component {
    componentDidMount() {
        let publicUrl = ['/login', '/register']
        let name = this.props.location.pathname
        if (publicUrl.indexOf(name) > -1) {
            return null
        }

        //获取用户信息
        axios.get('/user/info').then(res => {
            if (res.status === 200) {
                if (res.data.code === 0) {
                    //有登录信息的
                } else {
                    //没有登录信息的
                    this.props.history.push('./login')
                }
                console.log(res.data)
            }
        })
    }
    render() {
        // console.log(this.props.location)
        return null
    }
}
export default withRouter(Authroute)
//需要widthRoute包裹着组件