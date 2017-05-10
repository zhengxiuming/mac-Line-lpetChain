/**
 * Created by zhengxiuming on 16/9/24.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';
import {Table, Modal, FormControl, Form, Message, Datepicker, FormItem, Button, Icon} from '../../libs/rctui/index';
import { bindActionCreators } from 'redux'

import {fetchEmployeeList} from "../../actions/employee";

import { connect } from 'react-redux'
import {DUID} from '../../globals'
import $ from 'jquery'
import Loading from '../../libs/react-loading'
import {EMPLOYEEDUID} from '../../globals';


class RepertoryTransfer extends Component {
    componentWillMount(){
        this.props.actions.fetchEmployeeList(EMPLOYEEDUID,0,"")
    }
    handleClick(){
        hashHistory.push("/stockTransfer");
        //console.log(this.props)
    }
    render() {
        console.log(this.props.employees);
        let table_config={
            bordered:false,
            striped:true
        }
        return (
            <div>
                <div className="matte"></div>
                <div className="applySheet">
                    <div className="z_applyHd">
                        <div className="z_nav">
                            <span className="title">库存调拨申请单</span>
                        </div>
                        <div className="backHistory">
                            <a href="javascript:;" onClick={this.handleClick.bind(this)}>返回库存调拨</a>
                        </div>
                        <div className="z_nav_hd clearfix">
                            <div className="hd_left">
                                <span className="title">创建于</span>
                                <span className="title titleTime">2016.09.01</span>
                            </div>
                            <div className="hd_right">
                                <span className="title titleSheet">调拨单号:</span>
                                <span className="title titleSheet">CHW123910</span>
                            </div>
                        </div>
                    </div>
                    <div className="applySheetContent">
                        <h2>库存调拨申请单</h2>
                        <div>
                            <ul className="apply_hospital clearfix">
                                <li className="first">
                                    <span>发起医院：</span>
                                    <span>联宠国际动物检测中心望京分院</span>
                                </li>
                                <li>
                                    <span>目标医院：</span>
                                    <span>联宠国际动物检测中心夏威夷分院</span>
                                </li>
                                <li>
                                    <span>申请日期：</span>
                                    <span>2016.07.08</span>
                                </li>
                            </ul>
                        </div>
                        <div className="tableContent">
                            <h3>申请商品清单</h3>
                            <Table ref="table"
                                   bordered={table_config.bordered}
                                   striped={table_config.striped}
                                   data={this.props.list}
                                   height={346}
                                   headers={[
                                       { name: 'aid',header: '商品编号'},
                                       { name: 'commodity_name', header: '商品名称'},
                                       { name: 'dimension', header: '规格' },
                                       { name:'unit',header:"单位"},
                                       { name:'factory',header:"厂家"},
                                       { name:'apply_num',header:"申请数量"}
                                   ]} />
                            <div className="total">
                                合计申请商品
                                <lable>52种</lable>，
                                合计申请数量<span>1000</span>
                            </div>
                        </div>
                        <div className="step">
                            <div className="clearfix headerTitle">
                                <div className="status">申请已提交</div>
                                <div className="reticule"></div>
                            </div>
                            <div className="clearfix bodyStep">
                                <ul>
                                    <li className="radius"></li>
                                    <li className="verticalLine"></li>
                                    <li className="radius"></li>
                                </ul>
                                <table className="bodyTitle">
                                    <tr>
                                        <td>处理医院：</td>
                                        <td>联宠国际动物检测中心总院</td>
                                    </tr>
                                    <tr>
                                        <td>处理结果：</td>
                                        <td>已指派其他医院</td>
                                    </tr>
                                    <tr>
                                        <td>操作人员：</td>
                                        <td>周医生</td>
                                    </tr>
                                    <tr>
                                        <td>备注：</td>
                                        <td>已联系联宠国际动物检测中心望京分院</td>
                                    </tr>
                                    <tr>
                                        <td>指派医院：</td>
                                        <td>联宠国际动物检测中心望京分院</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="clearfix headerTitle">
                                <div className="status">申请已处理</div>
                                <div className="reticule"></div>
                            </div>
                            <div className="clearfix bodyStep">
                                <ul>
                                    <li className="radius"></li>
                                    <li className="verticalLine"></li>
                                    <li className="radius"></li>
                                </ul>
                                <table className="bodyTitle">
                                    <tr>
                                        <td>处理医院：</td>
                                        <td>联宠国际动物检测中心总院</td>
                                    </tr>
                                    <tr>
                                        <td>处理结果：</td>
                                        <td>已同意</td>
                                    </tr>
                                    <tr>
                                        <td>操作人员：</td>
                                        <td>周医生</td>
                                    </tr>
                                    <tr>
                                        <td>备注：</td>
                                        <td>已联系联宠国际动物检测中心望京分院</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="clearfix headerTitle">
                                <div className="status">处理完毕</div>
                                <div className="reticule"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state,ownProps){
    var list=[
        {
            aid:"P10000101",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000102",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000103",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000104",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000105",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000106",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000107",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000108",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000109",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000110",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
        ,{
            aid:"P10000111",
            commodity_name:"福来恩狗用杀虱除虫滴剂",
            dimension:"2.68ml",
            unit:"管",
            factory:"法国皇家粮食厂",
            apply_num:"100"
        }
    ]
    return{
        employees:state.employee,
        list:list
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({
            fetchEmployeeList:fetchEmployeeList
        },dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RepertoryTransfer)