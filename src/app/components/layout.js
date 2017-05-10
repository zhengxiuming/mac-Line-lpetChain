import React from 'react';
import ReactDOM from 'react-dom';
import {
    render
} from 'react-dom';
import Header from '../components/header.js';
import Lpetnav from '../components/lpetnav.js';

let Layout = React.createClass({
    render() {
        var login_info={
            enterprise_id:1
            ,chain_name:"联宠国际动物检测中心"
            ,user_name:"李冰"
            ,avatar:""
        }
        return (
            <div className="content">
                <Header login_info={login_info}/>
                <div className="chain_body clearfix" id="chain_body">
                    <Lpetnav/>
                    <div className="chain_body_right">
                        {this.props.children}
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

export default Layout;