import React,{Component} from "react"

class Clock extends Component{
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
export default Clock