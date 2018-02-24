import { Component } from "./C:/Users/zhangyuhong01/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react";

/**
 * 是不是五八App
 */
export function isWubaApp(){
    return !!getUa().wuba;
}
let wholeChannel=[
    {
        "choice" : "精选"
    },
    {
        "car" : "汽车"
    },
    {
        "life" : "生活"
    }
]


class Fam extends Component{
    render(){
        return (
            <ul className="toutiao-list-menu">
                    {
                        wholeChannel.map((item, index) => {
                            let channel = Object.keys(item)[0];
                            let name = item[channel];
                            console.log(channel)
                            return <li key={channel} className={channel === this.state.channel ? "active" : ""}
                                    onClick={this.handleMenuClick.bind(this, channel)}>{name}</li>
                        })
                    }
                    </ul>

        )
    }
}