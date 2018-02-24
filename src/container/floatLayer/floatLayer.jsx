import React from "react"
import lodingImg from './loding.gif'
import './floatLayer.css'
class FloatLayer extends React.Component{
    render(){
        return (
            <div className='float'>
                <div className='float-layer'>
                    <img src={lodingImg} alt=""/>
                    <p>加载中</p>
                </div>
            </div>
        )
    }
}
export default FloatLayer