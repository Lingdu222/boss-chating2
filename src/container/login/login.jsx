import React, { Component } from 'react'
//引入模块
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
class Login extends Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }
    register() {
        this.props.history.push('./register')
    }
    render() {
        return (
            <div>

                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>
                    </List>
                    <Button type="primary" onClick={this.login}>登陆</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login