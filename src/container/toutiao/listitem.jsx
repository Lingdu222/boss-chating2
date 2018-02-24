import React,{Component} from 'react'
class ListItem extends Component{
    static defaultProps={
        checked:false
    }
    render(){
        return(
            <div>
                <h1>{this.props.text}</h1>
                <input 
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />

            </div>
        )
    }
}
export default ListItem