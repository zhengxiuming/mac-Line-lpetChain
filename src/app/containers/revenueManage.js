/**
 * Created by zhengxiuming on 2016/10/11.
 */
import React, {
    Component,
    PropTypes
} from 'react';
import ReactEcharts from 'echarts-for-react';
import {
    Router,
    Route,
    hashHistory,
    Link
} from 'react-router';
import {
    Table,
    Modal,
    FormControl,
    Form,
    Message,
    Datepicker,
    FormItem,
    Button,
    Icon
} from '../libs/rctui/index';
import {
    bindActionCreators
} from 'redux';
import {
    actionCreator_fetch_revenueManage,
    actionCreator_start_time_change_revenueManage,
    actionCreator_end_time_change_revenueManage
}
    from "../actions/revenueManage";
import {
    connect
} from 'react-redux';
import * as tpTypes from '../components/TimePeriod';
import TimePeriod from '../components/TimePeriod';
import Loading from '../libs/react-loading'
var moment = require("moment")
require('../styles/calendar.css')
import Calendar from 'uxcore-calendar'
var _modalID = 0;

import RevenueRanking from '../components/revenueRanking';

class RevenueManage extends Component {
    constructor(props) {
        super(props);
        this.handleStartCalendarSelect = this.handleStartCalendarSelect.bind(this);
        this.handleEndCalendarSelect = this.handleEndCalendarSelect.bind(this);
        this.handleTimePrepaidChanged = this.handleTimePrepaidChanged.bind(this);
        this.handleTimePrepaidInitFinished = this.handleTimePrepaidInitFinished.bind(this);
        this.handleSumbitApplyCount = this.handleSumbitApplyCount.bind(this);
        this.handleSearchSubmit=this.handleSearchSubmit.bind(this);
    }
    handleSumbitApplyCount(){

    }
    handleSearchSubmit(formData){
        console.log("this is time:",formData,this.refs.pm_start_calendar.props.value);
    }
    handleStartCalendarSelect(select_date, select_date_str) {
        // debugger
        // findDOMNode(this.refs.input);
        this.props.actions.actionCreator_start_time_change_revenueManage(select_date_str)
        this.refs.timePeriod.clearAllSelected()
    }
    handleEndCalendarSelect(select_date, select_date_str) {
        // debugger
        // findDOMNode(this.refs.input);
        this.props.actions.actionCreator_end_time_change_revenueManage(select_date_str)
        this.refs.timePeriod.clearAllSelected()
    }


    handleTimePrepaidChanged(start_timestamp, end_timestamp, start_time, end_time) {

        this.props.actions.actionCreator_start_time_change_revenueManage(start_time)

        this.props.actions.actionCreator_end_time_change_revenueManage(end_time)
    }
    handleTimePrepaidInitFinished(start_timestamp, end_timestamp, start_time, end_time) {
        this.props.actions.actionCreator_start_time_change_revenueManage(start_time)

        this.props.actions.actionCreator_end_time_change_revenueManage(end_time)
    }

    onChartReady(chart) {
        setTimeout(function () {
            chart.hideLoading();
        }, 1000);
    }

    getOption() {
        const option = {
            title: {
                text: '营收合计',
                subtext: "¥12,000.00",
                x: 'center',
                y: 'center',
                itemGap: 5,
                subtextStyle: {
                    color: 'black',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                    fontWeight: 'bolder'
                },
                textStyle: {
                    color: 'rgba(30,144,255,0.8)',
                    fontFamily: '微软雅黑',
                    fontSize: 35,
                    fontWeight: 'bolder'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['联宠国际动物检测中心望京分院', '联宠国际动物检测中心美丽夏威夷分院', '联宠国际动物检测中心回龙观分院', '联宠国际动物检测中心花家地分院', '联宠国际动物检测中心上地分院', "联宠国际动物检测中心中关村分院", "联宠国际动物检测中心东城分院"]
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: true,
                    data: [
                        {value: 335, name: '联宠国际动物检测中心望京分院'},
                        {value: 310, name: '联宠国际动物检测中心美丽夏威夷分院'},
                        {value: 234, name: '联宠国际动物检测中心回龙观分院'},
                        {value: 135, name: '联宠国际动物检测中心花家地分院'},
                        {value: 148, name: '联宠国际动物检测中心上地分院'},
                        {value: 548, name: '联宠国际动物检测中心中关村分院'},
                        {value: 348, name: '联宠国际动物检测中心东城分院'},
                        {value: 1548, name: '联宠国际动物检测中心'}
                    ],
                    itemStyle: {
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            },
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
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
            name: "本月",
            type: tpTypes.TIME_PERIOD_MONTH
        }, {
            name: "本季度",
            type: tpTypes.TIME_PERIOD_MONTH_PERIOD
        }, {
            name: "本年",
            type: tpTypes.TIME_PERIOD_YEAR_PERIOD
        }]
        return (
            <div>
                {this.props.children}
                <div className="search-bar time_search">
                    <Form onSubmit={this.handleSearchSubmit}>
                        <Calendar format="yyyy-MM-dd" ref="pm_start_calendar" value={this.props.start_time} onSelect={this.handleStartCalendarSelect} className="form-start-time" />
                        -<Calendar format="yyyy-MM-dd" ref="pm_end_calendar" value={this.props.end_time} onSelect={this.handleEndCalendarSelect}  className="form-end-time" />
                        <TimePeriod ref="timePeriod" onChange={this.handleTimePrepaidChanged} onInitFinished={this.handleTimePrepaidInitFinished} periods={periods}/>
                        <Button  className="form-search" type="submit" status="primary"><Icon icon="search" />筛选</Button>
                    </Form>
                </div>
                <div className="clearfix echarts-content">
                <div className="react-echarts">
                    <ReactEcharts
                        option={this.getOption()}
                        style={{height: '450px', width: '100%'}}
                        className='react_for_echarts'
                        showLoading={true}
                        onChartReady={this.onChartReady}
                    />
                </div>
                <div className="content-nav-bar data-ranking">
                    <span>上缴营业额排行</span>
                    <RevenueRanking data={this.props.revenueList}/>
                </div>
            </div>
                <div>
                    <div className="content-nav-bar select-search">
                        <span>营业额上缴明细</span>
                        <Form>
                            <FormControl type="select" className="form-select" name="search_content"
                                         data={this.props.hospital_data} placeholder="所有医院"/>
                            <Button  className="form-search" type="submit" status="primary"><Icon icon="search" />查询</Button>
                        </Form>
                    </div>
                    <div className="talbe-container">
                        <Table ref="table"
                               bordered={table_config.bordered}
                               striped={table_config.striped}
                               data={this.props.list}
                               headers={[
                                   {name: 'create_time', header: '上缴时间'},
                                   {name: 'aid', header: '上缴单号'},
                                   {name: 'stock_type', header: '上缴医院'},
                                   {name: 'concat_unit', header: '操作人员'},
                                   {name: 'amount', header: '上缴金额'},
                                   {
                                       name: 'edit', header: '查看详情',
                                       content: ()=> {
                                           return <Link style={{color: "blue"}} to="/revenuePaidSheet"
                                                        target="_blank">查看</Link>
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
        create_time: "2016.5.17 14:00"
    }, {
        aid: "c23048018301922",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        amount: '¥1000',
        pay_status: "已结算",
        create_time: "2016.5.17 14:00"
    }, {
        aid: "c23048018301923",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "已结算",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    }, {
        aid: "c23048018301924",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301925",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301926",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301927",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301928",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301929",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301930",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301931",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301932",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301933",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c230480183019334",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301935",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301936",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    },{
        aid: "c23048018301937",
        stock_type: "挂帐采购入库",
        concat_unit: "联宠国际动物检测中心",
        pay_status: "- -",
        amount: '¥1000',
        create_time: "2016.5.17 14:00"
    }]
    let revenueList=[
        {name:"联宠国际动物检测中心望京分院",money:"335"},
        {name:"联宠国际动物检测中心美丽夏威夷分院",money:"1200"},
        {name:"联宠国际动物检测中心回龙观分院",money:"189"},
        {name:"联宠国际动物检测中心花家地分院",money:"1100"},
        {name:"联宠国际动物检测中心上地分院",money:"800"},
        {name:"联宠国际动物检测中心中关村分院",money:"1234"},
        {name:"联宠国际动物检测中心健德门分院",money:"1729"}
    ]
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
    return {
        hospital_data: hospital_data,
        status_data: status_data,
        list: list,
        revenueList:revenueList,
        start_time: state.revenueManage.start_time,
        end_time: state.revenueManage.end_time
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            actionCreator_start_time_change_revenueManage: actionCreator_start_time_change_revenueManage,
            actionCreator_end_time_change_revenueManage: actionCreator_end_time_change_revenueManage
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RevenueManage);