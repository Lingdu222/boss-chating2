import React, { Component } from "react";
class Test2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            index: event.target.value
        })
        console.log(this.state.index)

        // if(this.state.index >= 1 && this.state.index <= 10) {  
        //     //找到对应的输入框并将焦点设置到里面  
        //     var refName = "input" + this.state.index;  
        //     //var inputDOM = React.findDOMNode(this.refs[refName]);  
        //    // var inputDOM = this.refs[refName].getDOMNode();  
        //     var inputDOM =React.findDOMNode(this.refs.refName);  
        //     inputDOM.focus();  
        // }  
    }
    render() {
        var inputs = [];
        for (var i = 1; i <= 10; i++) {
            inputs.push(<div><li key={i}><input type="text" ref={"input" + i} /></li><br /></div>);
        }
        return (
            <div>
                <label htmlFor="input" >在这里输入下面任意输入框的索引，光标会自动定位到输入框内：</label>
                <input type="text" id="input" onChange={this.handleChange} />
                <hr />
                <ol>
                    {inputs}
                </ol>

            </div>
        )
    }

}
export default Test2