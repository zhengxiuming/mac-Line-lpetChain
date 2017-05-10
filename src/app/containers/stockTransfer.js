/**
 * Created by zhengxiuming on 16/9/27.
 */
/**
 * Created by zhengxiuming on 16/9/26.
 */
import React, { Component, PropTypes  } from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';
import {Table,Modal,FormControl,Form,Message,Datepicker,FormItem,Button,Icon} from '../libs/rctui/index'
import { bindActionCreators } from 'redux'
import {actionCreator_fetch_stockTransfer
    ,actionCreator_start_time_change_stockTransfer
    ,actionCreator_end_time_change_stockTransfer
} from "../actions/stockTransfer"

import * as tpTypes from '../components/TimePeriod'
import TimePeriod from '../components/TimePeriod'

import { connect } from 'react-redux'
import {DUID} from '../globals'
import $ from 'jquery'
import Loading from '../libs/react-loading'
import {EMPLOYEEDUID} from '../globals';

var moment =require("moment")

require('../styles/calendar.css')

import Calendar from 'uxcore-calendar'

var _modalID=0;

class StockTransfer extends Component{
    constructor(props){
        super(props);
        this.handleStartCalendarSelect = this.handleStartCalendarSelect.bind(this);
        this.handleEndCalendarSelect = this.handleEndCalendarSelect.bind(this);
        this.handleTimePrepaidChanged = this.handleTimePrepaidChanged.bind(this);
        this.handleTimePrepaidInitFinished = this.handleTimePrepaidInitFinished.bind(this);
        this.handleSumbitApplyCount = this.handleSumbitApplyCount.bind(this);

    }
    componentWillMount(){
        // this.props.actions.actionCreator_fetch_transferClear(DUID);

    }
    handleSumbitApplyCount(){

    }

    handleStartCalendarSelect(select_date,select_date_str){
        // debugger
        // findDOMNode(this.refs.input);
        this.props.actions.actionCreator_start_time_change_stockTransfer(select_date_str)
        this.refs.timePeriod.clearAllSelected()
    }
    handleEndCalendarSelect(select_date,select_date_str){
        // debugger
        // findDOMNode(this.refs.input);
        this.props.actions.actionCreator_end_time_change_stockTransfer(select_date_str)
        this.refs.timePeriod.clearAllSelected()
    }


    handleTimePrepaidChanged(start_timestamp,end_timestamp,start_time,end_time){

        this.props.actions.actionCreator_start_time_change_stockTransfer(start_time)

        this.props.actions.actionCreator_end_time_change_stockTransfer(end_time)
    }
    handleTimePrepaidInitFinished(start_timestamp,end_timestamp,start_time,end_time){
        this.props.actions.actionCreator_start_time_change_stockTransfer(start_time)

        this.props.actions.actionCreator_end_time_change_stockTransfer(end_time)
    }

    render (){
        let table_config={
            bordered:false,
            striped:true
        }
        let periods=[
            {
                name:"今日",
                type:tpTypes.TIME_PERIOD_TODAY
            }
            ,{
                name:"本周",
                type:tpTypes.TIME_PERIOD_WEEK
            }
            ,{
                name:"本月",
                type:tpTypes.TIME_PERIOD_MONTH
            }
        ]
        return(
            <div>
                {this.props.children}
                <div className="search-bar">
                    <Form onSubmit={this.handleSearchSubmit}>
                        <FormControl type="select" className="form-select" name="search_content" label={'出库医院：'} data={this.props.hospital_data} placeholder="所有医院"/>
                        <FormControl type="select" className="form-select" name="search_content" label={'调拨状态：'} data={this.props.status_data} placeholder="所有类型"/>
                        <FormControl type="text" className="form-input" name="search_content" label={'申请单号：'} placeholder="申请单号"/>
                        <FormControl type="select" className="form-select" name="search_content" label={'入库医院：'} data={this.props.hospital_data} placeholder="所有医院"/>
                        <Calendar  format="yyyy-MM-dd" ref="pm_start_calendar" value={this.props.start_time} onSelect={this.handleStartCalendarSelect} className="form-start-time" />
                        -<Calendar format="yyyy-MM-dd" ref="pm_end_calendar" value={this.props.end_time} onSelect={this.handleEndCalendarSelect}  className="form-end-time" />
                        <TimePeriod ref="timePeriod" onChange={this.handleTimePrepaidChanged} onInitFinished={this.handleTimePrepaidInitFinished} periods={periods}/>
                        <Button  className="form-search" type="submit" status="primary"><Icon icon="search" />查询</Button>
                    </Form>
                </div>
                <div className="content-nav-bar">
                    <Link className="new_item" to="" target="_blank">新建调拨</Link>
                    <span>调拨申请列表</span>
                </div>
                <div className="talbe-container">
                    <Table ref="table"
                           bordered={table_config.bordered}
                           striped={table_config.striped}
                           data={this.props.list}
                           headers={[
                               { name: 'create_time',header: '时间'},
                               { name: 'aid', header: '调拨单号' },
                               { name: 'payer_hospitl', header: '出库医院' },
                               { name:'receipt_hospital',header:"入库医院"},
                               { name:'amount',header:"金额"},
                               { name:'status',header:"状态",
                                    content:(name)=>{
                                        return <a className={name.status==="待收货"?"z_green":"z_color"}>{name.status}</a>
                                    }
                               },
                               { name: '', header: '操作',
                                   content: (d)=>{
                                       return <Link style={{color:"blue"}} to="/checkStockTransferA" target="_blank">查看</Link>
                                   }
                               }
                           ]} />
                </div>
            </div>
        )
    }
};
function mapStateToProps(state,ownProps){
    var list=[
        {
            aid:"c23048018301921",
            payer_hospitl:"联宠国际天通苑分院",
            receipt_hospital:"联宠国际动物检测中心",
            amount:'¥1000',
            status:'待收货',
            create_time:"2016.5.17 14:00"
        }
        ,{
            aid:"c23048018301922",
            payer_hospitl:"联宠国际天通苑分院",
            receipt_hospital:"联宠国际动物检测中心",
            amount:'¥1000',
            status:'已取消',
            create_time:"2016.5.17 14:00"
        }
        ,{
            aid:"c23048018301923",
            payer_hospitl:"联宠国际天通苑分院",
            receipt_hospital:"联宠国际动物检测中心",
            amount:'¥1000',
            status:'未结算',
            create_time:"2016.5.17 14:00"
        }
        ,{
            aid:"c23048018301924",
            payer_hospitl:"联宠国际天通苑分院",
            receipt_hospital:"联宠国际动物检测中心",
            amount:'¥1000',
            status:'已结算',
            create_time:"2016.5.17 14:00"
        }
    ]

    let hospital_data={
        all: '所有医院',
        lianchong: '联宠国际动物检测中心',
        meilian: '美联众合',
        chongfuxin: '宠福鑫',
    }
    let status_data={
        all: '所有',
        daiqueren: '待收货',
        yichuli: '未结算',
        yiquxiao: '已结算',
        yijujue:"已取消"
    }
    return{
        hospital_data:hospital_data,
        status_data:status_data,
        list:list,
        start_time:state.stockTransfer.start_time,
        end_time:state.stockTransfer.end_time
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({
            actionCreator_fetch_stockTransfer:actionCreator_fetch_stockTransfer
            ,actionCreator_start_time_change_stockTransfer:actionCreator_start_time_change_stockTransfer
            ,actionCreator_end_time_change_stockTransfer:actionCreator_end_time_change_stockTransfer
        },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockTransfer)