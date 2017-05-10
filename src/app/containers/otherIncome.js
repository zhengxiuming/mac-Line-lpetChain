/**
 * Created by zhengxiuming on 2016/10/13.
 */
import React, {Component, PropTypes} from 'react';
import ReactEcharts from 'echarts-for-react';
import {Router, Route, hashHistory, Link} from 'react-router';
import {
    Table,
    Modal,
    FormControl,
    Form,
    Checkbox,
    Message,
    Select,
    Input,
    Pagination,
    Icon,
    Button
} from '../libs/rctui/index'
import {
    bindActionCreators
} from 'redux';
import {
    actionCreator_fetch_otherIncome,
    actionCreator_start_time_change_otherIncome,
    actionCreator_end_time_change_otherIncome
}
    from "../actions/otherIncome";
import {fetchEmployeeList} from "../actions/employee";
import {fetchMoneyAccountList} from "../actions/moneyAccount";
import {
    connect
} from 'react-redux';
import * as tpTypes from '../components/TimePeriod';
import TimePeriod from '../components/TimePeriod';
import Loading from '../libs/react-loading'
var moment = require("moment")
require('../styles/calendar.css')
import {DUID} from '../globals'
import $ from 'jquery'

import {EMPLOYEEDUID} from '../globals';
import Calendar from 'uxcore-calendar'
var _modalID = 0;


class OtherIncome extends Component {
    constructor(props) {
        super(props);
        this.handleStartCalendarSelect = this.handleStartCalendarSelect.bind(this);
        this.handleEndCalendarSelect = this.handleEndCalendarSelect.bind(this);
        this.handleTimePrepaidChanged = this.handleTimePrepaidChanged.bind(this);
        this.handleTimePrepaidInitFinished = this.handleTimePrepaidInitFinished.bind(this);
        this.handleSumbitApplyCount = this.handleSumbitApplyCount.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleAddIncome=this.handleAddIncome.bind(this);
        this.handleCheckIncome=this.handleCheckIncome.bind(this);
    }
    componentWillMount(){
        if(this.props.employees.status==0){
            this.props.actions.fetchEmployeeList(EMPLOYEEDUID,1,"")
        }
        if(this.props.moneyAccount.status==0){
            this.props.actions.fetchMoneyAccountList(DUID)
        }
    }
    handleSumbitApplyCount() {

    }

    handleSearchSubmit(formData) {
        console.log("this is time:", formData, this.refs.pm_start_calendar.props.value);
    }

    handleStartCalendarSelect(select_date, select_date_str) {
        // debugger
        // findDOMNode(this.refs.input);
        this.props.actions.actionCreator_start_time_change_otherIncome(select_date_str)
        this.refs.timePeriod.clearAllSelected()
    }

    handleEndCalendarSelect(select_date, select_date_str) {
        // debugger
        // findDOMNode(this.refs.input);
        this.props.actions.actionCreator_end_time_change_otherIncome(select_date_str)
        this.refs.timePeriod.clearAllSelected()
    }


    handleTimePrepaidChanged(start_timestamp, end_timestamp, start_time, end_time) {

        this.props.actions.actionCreator_start_time_change_otherIncome(start_time)

        this.props.actions.actionCreator_end_time_change_otherIncome(end_time)
    }

    handleTimePrepaidInitFinished(start_timestamp, end_timestamp, start_time, end_time) {
        this.props.actions.actionCreator_start_time_change_otherIncome(start_time)

        this.props.actions.actionCreator_end_time_change_otherIncome(end_time)
    }

    handleAddIncome() {
        console.log(this.props.moneyAccount);
        this.openModal(<div>新增收入 <span className="header_number">编号:{this.props.number.number}</span></div>, this.handleAddSubmit);
    }

    handleAddSubmit(formData) {

    }

    handleCheckIncome(d) {
        console.log(d)
        //this.openModal("");
        this.openCheckModal(<div>收入单<span className="header_number">编号:{this.props.number.number}</span></div>);
    }

    openModal(name, handle, data) {
        let employees=this.props.employees.list,op_data={};
        _modalID = Modal.open({
            header: name,
            width: 480,
            buttons: {
                '保存': 'submit',
                '取消': true
            },
            content: (
                <div className="prepayment-dialog">
                    <Form onSubmit={handle}>
                        <div className="line-info">信息
                            <div></div>
                        </div>
                        <FormControl className="dn-select" name="belong_name" label={'所属医院：'} data={op_data}
                                     type="select" placeholder="请选择"/>
                        <FormControl className="dn-select" name="income_time" label={'收入日期：'}
                                     type="select" placeholder="请选择"/>
                        <FormControl className="dn-input account_input" name="income_use" label={'收入用途：'}/>
                        <FormControl className="dn-select" name="employee_id" label={'操作人员：'}
                                     type="select" placeholder="请选择"/>
                        <FormControl className="dn-input dn-input-textarea" name="notes" label={'备注：'} type="textarea"
                                     rows={3} placeholder=""/>
                        <div className="line-info">收入
                            <div></div>
                        </div>
                        {this.props.moneyAccount.list.map(
                            function (account, index) {
                                let label_name = account.acount_name + "："
                                let ele_name = "acount_name_" + account.aid;
                                return <FormControl className="dn-input account_input" name={ele_name}
                                                    label={label_name} grid={1 / 1} placeholder="￥0.00" validator={{
                                    func: (value) => {
                                        if (/^[0-9\.]*$/.test(value)) {
                                            let total = 0;
                                            $("input.account_input").each((index, acc_ele)=> {
                                                if (acc_ele.value) {
                                                    total += parseInt(acc_ele.value)
                                                }
                                                ;

                                                // console.log(acc_ele.value)
                                            })
                                            // console.log(total)

                                            $(".propayment-total").text(total)

                                            return true;
                                        }
                                        if (!value) {
                                            return true
                                        }
                                        return new Error('数据格式错误,请输入数字');
                                    }
                                }}/>

                            }
                        )
                        }
                        <div className="count_info">合计收入金额:¥<span className="propayment-total">0.00</span></div>
                    </Form>
                </div>
            )
        })
    }
    openCheckModal(name,data){
        let employees=this.props.employees.list,op_data={};
        _modalID=Modal.open({
            header:name,
            width:480,
            content:(
                <div className="prepayment-dialog">

                        <div className="line-info">信息
                            <div></div>
                        </div>
                        <ul className="income-infoList">
                            <li>所属医院:<span>联宠国际动物检测中心</span></li>
                            <li>收入日期:<span>联宠国际动物检测中心</span></li>
                            <li>收入用途:<span>联宠国际动物检测中心</span></li>
                            <li>操作人员:<span>联宠国际动物检测中心</span></li>
                            <li><span className="title-spacing">备注</span><span className="colon">:</span><span>联宠国际动物检测中心</span></li>
                        </ul>
                        <div className="line-info">收入
                            <div></div>
                        </div>
                        <table className="income-bankList">
                            {this.props.moneyAccount.list.map(
                                function (account, index) {
                                    let label_name = account.acount_name + "："
                                    let ele_name = "acount_name_" + account.aid;
                                    return <tr><td className="bank-name">{label_name}</td><td>¥12,121,0</td></tr>
                                }
                            )
                            }
                        </table>
                        <div className="count_info">合计收入金额:¥<span className="propayment-total">0.00</span></div>
                </div>
            )
        })
    }

    onChartReady(chart) {
        setTimeout(function () {
            chart.hideLoading();
        }, 1000);
    }

    getOption() {
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            // legend: {
            //     orient: 'vertical',
            //     left: 'left',
            //     data: ["收入汇总"]
            // },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['项目一', '项目二', '项目三', '项目四', '项目五'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                }
            ],
            series: [
                {
                    name: '收入汇总',
                    type: 'bar',
                    barWidth: '60%',
                    data: [
                        1233, 2451, 5903, 2651, 1331
                    ]
                }
            ]
        };
        return option;
    }

    render() {
        let table_config = {
            bordered: false,
            striped: true
        }
        let periods = [{
            name: "今日",
            type: tpTypes.TIME_PERIOD_TODAY
        }, {
            name: "本周",
            type: tpTypes.TIME_PERIOD_WEEK
        }, {
            name: "本月",
            type: tpTypes.TIME_PERIOD_MONTH
        }]
        return (
            <div>
                <div className="search-bar">
                    <Form onSubmit={this.handleSearchSubmit}>
                        <FormControl className="form-select" name="company_id" label={'所属医院：'}
                                     data={this.props.hospital_data} type="select" placeholder="所有医院"/>
                        <Calendar format="yyyy-MM-dd" ref="pm_start_calendar" value={this.props.start_time}
                                  onSelect={this.handleStartCalendarSelect} className="form-start-time"/>
                        -<Calendar format="yyyy-MM-dd" ref="pm_end_calendar" value={this.props.end_time}
                                   onSelect={this.handleEndCalendarSelect} className="form-end-time"/>
                        <TimePeriod ref="timePeriod" onChange={this.handleTimePrepaidChanged}
                                    onInitFinished={this.handleTimePrepaidInitFinished} periods={periods}/>
                        <Button className="form-search" type="submit" status="primary"><Icon icon="search"/>筛选</Button>
                    </Form>
                </div>
                <div>
                    <div className="content-nav-bar clearfix">
                        <a className="new_item" onClick={this.handleAddIncome}>新增收入</a>
                        <span>其他收入汇总</span>
                        <span className="income-total">收入总计:¥1,1000,00</span>
                    </div>
                    <div className="react-echarts-width">
                        <ReactEcharts
                            option={this.getOption()}
                            style={{height: '450px', width: '100%'}}
                            className='react_for_echarts'
                            showLoading={true}
                            onChartReady={this.onChartReady}
                        />
                    </div>
                </div>
                <div className="table-content">
                    <div className="table-content-header">
                        <h3>其他收入明细</h3>
                        <div className="table-content-header-search">
                            <Form onSubmit={this.handleSearchFrom}>
                                <FormControl type="text" name="search_text" className="search_txt"
                                             placeholder="请输入姓名/医院/联系方式"/>
                                <Button className="btn_search" status="primary" type="submit"><Icon
                                    icon="search"/>查询</Button>
                            </Form>
                        </div>
                    </div>
                    <div className="talbe-container">
                        <Table ref="table"
                               bordered={table_config.bordered}
                               striped={table_config.striped}
                               data={this.props.list}
                               headers={[
                                   {name: 'create_time', header: '收入时间'},
                                   {name: 'aid', header: '收入单号'},
                                   {name: 'stock_type', header: '所属医院'},
                                   {name: "item", header: "收入项目"},
                                   {name: 'concat_unit', header: '操作人员'},
                                   {name: 'amount', header: '上缴金额'},
                                   {
                                       name: 'edit', header: '查看详情',
                                       content: (d)=> {
                                           return <a style={{color: "blue"}} href="javascript:;" onClick={()=> {
                                               this.handleCheckIncome(d)
                                           }}>查看</a>
                                       }
                                   }
                               ]}/>
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    var list = [{
        aid: "c23048018301921",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "未结算",
        amount: '¥1000',
        item: "收入项目一",
        create_time: "2016.5.17 14:00"
    }, {
        aid: "c23048018301922",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        amount: '¥1000',
        pay_status: "已结算",
        item: "收入项目一",
        create_time: "2016.5.17 14:00"
    }, {
        aid: "c23048018301923",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "已结算",
        item: "收入项目一",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    }, {
        aid: "c23048018301924",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        item: "收入项目一",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    }]

    let hospital_data = {
        all: '所有医院',
        lianchong: '联宠国际动物检测中心',
        meilian: '美联众合',
        chongfuxin: '宠福鑫',
    }
    let status_data = {
        all: '所有',
        daiqueren: '待确认',
        yichuli: '已处理',
        yiquxiao: '已取消',
        yijujue: "已拒绝"
    }
    let number= {
        number:"P10000101901"
    };
    return {
        hospital_data: hospital_data,
        status_data: status_data,
        list: list,
        number:number,
        start_time: state.otherIncome.start_time,
        end_time: state.otherIncome.end_time,
        moneyAccount:state.moneyAccount, //资金账号
        employees: state.employee         //员工列表
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            actionCreator_fetch_otherIncome: actionCreator_fetch_otherIncome,
            actionCreator_start_time_change_otherIncome: actionCreator_start_time_change_otherIncome,
            actionCreator_end_time_change_otherIncome: actionCreator_end_time_change_otherIncome,
            fetchEmployeeList: fetchEmployeeList,
            fetchMoneyAccountList:fetchMoneyAccountList
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherIncome);