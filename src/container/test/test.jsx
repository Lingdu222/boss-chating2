import React,{Component} from 'react'

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            wendu:"",
            localId:"11",   
        }
    }
    handerClick=(e)=>{
        this.setState({
            wendu:e.target.value
        })
        const  url=  "http://wx.hortor.net/auth/login?gameId=pirate&channel=58_"+this.state.localId
        console.log(url)
    }
    render(){
       
           
     
        return(
            <div>
                <input type="text" onChange={this.handerClick} value={this.state.wendu}/>
               
                {
                    this.state.wendu>=100?<h1>这个温度水会沸腾</h1>:<h1>这个温度水不会沸腾</h1>

                }
            </div>
        )
    }
}
export default Test