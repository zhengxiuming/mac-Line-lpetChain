import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

let Systemlist=React.createClass({
    render(){
        return (
            <ul className="setting_list clearfix">
                <li>
                    <Link activeClassName="current" to="/expenses">消费设置</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/employee">员工管理</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/contactunit">往来单位</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/moneyAccount">资金账户</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/systemAccount">系统帐号</Link>
                </li>
            </ul>
        )
    }
});
export  default Systemlist;
