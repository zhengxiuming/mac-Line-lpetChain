import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

let RepertoryList=React.createClass({
    render(){
        return (
            <ul className="setting_list clearfix">
                <li>
                    <Link activeClassName="current" to="/prepaymentManage">预付管理</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/purchasesApply">采购申请</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/purchasesStock">采购入库</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/transferApply">调拨申请</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/stockTransfer">库存调拨</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/stockSearch">库存查询</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/stockCheck">库存盘点</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/purchasesPay">采购付款</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/transferettle">调拨结算</Link>
                </li>
            </ul>
        )
    }
});
export  default RepertoryList;
