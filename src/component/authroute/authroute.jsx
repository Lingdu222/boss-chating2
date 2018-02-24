/**
 * 这个组件只做一些用户的信息，并做一些跳转
 */
import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Authroute  extends React.Component{
    componentDidMount(){

        //获取用户信息
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                if(res.data.code===0){
                    //有登录信息的
                }else{
                    //没有登录信息的
                    //sconsole.log(this.props.history.push)
                   this.props.history.push('./login')
                }
                console.log(res.data)
            }
        })
    }
    render(){
        return (
            <div>
                检测路由

            </div>
        )
    }
}
export default withRouter(Authroute)
//需要widthRoute包裹着组件