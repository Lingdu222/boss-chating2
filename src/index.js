import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {
    HashRouter,
    Route
} from 'react-router-dom'
//引入redux
import {Provider} from 'react-redux'
//引入store
import store from './redux/store'
//引入模块
import Toutiao from './container/toutiao/toutiao'
import Test from './container/test/test'
import Login from './container/login/login'
import Register from './container/register/register'
import FloatLayer from './container/floatLayer/floatLayer'
import Authroute from './component/authroute/authroute'
import Clock from './component/clock/index'

import 'antd-mobile/dist/antd-mobile.css'
const App =()=>(
    <Provider store={store}>
         <HashRouter>
             <div>
                 {/* <Authroute></Authroute> */}
                 <Route path='/toutiao' component={Toutiao}/>
                 <Route path='/login' component={Login}/>
                 <Route path='/register' component={Register}/>
                 <Route path='/floatLayer' component={FloatLayer}/>
                 <Route path='/clock' component={Clock}/>
                 <Route path='/test' component={Test}/>    
             </div>
         </HashRouter>
    </Provider>  
)
ReactDOM.render(<App />, document.getElementById('root'));

