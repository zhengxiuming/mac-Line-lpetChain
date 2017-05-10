/**
 * Created by zhengxiuming on 2016/10/11.
 */
import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

let FinanceList=React.createClass({
    render(){
        return (
            <ul className="setting_list clearfix">
                <li>
                    <Link activeClassName="current" to="/revenueManage">营收管理</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/otherIncome">其他收入</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/financeExpend">财务支出</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/wageManage">工资管理</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/profitDividend">利润分红</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/fundSearch">资金查询</Link>
                </li>
                <li>
                    <Link activeClassName="current" to="/cashierGather">收银汇总</Link>
                </li>
            </ul>
        )
    }
});
export  default FinanceList;
