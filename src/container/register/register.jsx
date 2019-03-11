import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux';

// @connect(
//     state => ({})
// )
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: '',
            resPassword: '',
            type: 'genuis'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    register = () => {//两种改变绑定this指向的方法，bind这个方法性能会好一点
        // this.props.history.push('./register')
        console.log(this.state)
    }
    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo />
                <List>
                    <InputItem
                        onChange={v => this.handleChange('user', v)}
                    >用户</InputItem><WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={v => this.handleChange('password', v)}
                    >密码</InputItem><WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={v => this.handleChange('resPassword', v)}
                    >确认密码</InputItem><WhiteSpace />
                    <RadioItem
                        checked={this.state.type === 'genuis'}
                        onChange={() => this.handleChange('type', 'genuis')}
                    >牛人</RadioItem><WhiteSpace />
                    <RadioItem
                        checked={this.state.type === 'boss'}
                        onChange={() => this.handleChange('type', 'boss')}
                    >BOSS</RadioItem>
                </List>
                <WingBlank>
                    <Button type="primary" onClick={this.register}>注册</Button>
                    <span>已经有账号，<a href="/login">直接登录</a></span>
                </WingBlank>
            </div>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Register)
export default Register