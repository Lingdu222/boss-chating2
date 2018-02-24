import React,{Component} from 'react'
import ListItem from './listitem'
/**
 * 最简单实现一个组件（components）的方法是定义一个JavaScript函数,
 * 因为是用JavaScript函数编写的，我们称这样的组件是“函数化（functional）”的。
 */
function Hello(props){
    return <h1>hello ,{props.name}</h1>
}

/**
 * ES6 的class 实现组件
 */
class Hello2 extends Component{
    render(){
        return <h1>hi,{this.props.name}</h1>
    }
}
/**
 * 唯一可以分配 this.state 的地方是构造函数??????
 */
class Clock2 extends Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date()
        }
    }
    timer(){
        this.setState({
            date: new Date()
        });
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.timer(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);    

    }
    render(){
      
        return(
            <div>
                <h1>Hello, world!</h1>
                {/* 本地系统时间 */}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

            </div>
        )
    }
}
  class Toutiao extends  Component {
    static defaultProps={
        text:"我是Toutiao"
    }
    render(){
        return(
            <div>
                <ListItem text={this.props.text}/>
                <input type="text"/>
                <Hello name='zhangyuhong'/>
                <Hello2 name='zhangyuhong2'/>
                <Clock2/>
            </div>
        )

    }
}

export default Toutiao