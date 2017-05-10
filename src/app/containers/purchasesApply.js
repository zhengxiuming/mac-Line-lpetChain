import React, { Component, PropTypes } from 'react'
import {Table,Modal,FormControl,Form,Message,Datepicker,FormItem,Button,Icon} from '../libs/rctui/index'
import { bindActionCreators } from 'redux'
import {actionCreator_fetch_purchasesapply
  ,actionCreator_start_time_change_purchasesapply
  ,actionCreator_end_time_change_purchasesapply
  } from "../actions/purchasesApply"

import * as tpTypes from '../components/TimePeriod'
import TimePeriod from '../components/TimePeriod'

import { connect } from 'react-redux'
import {DUID} from '../globals'
import $ from 'jquery'
import Loading from '../libs/react-loading'
// import RUI from 'react-component-lib';
// require('../styles/money.css')

// var Calendar = require('uxcore-calendar');
require('../styles/calendar.css')

import Calendar from 'uxcore-calendar'



var _modalID=0;

class PurchasesApply extends Component {
  constructor (props) {
    super(props);
   	this.handleStartCalendarSelect = this.handleStartCalendarSelect.bind(this);
    this.handleEndCalendarSelect = this.handleEndCalendarSelect.bind(this);
    this.handleTimePrepaidChanged = this.handleTimePrepaidChanged.bind(this);
    this.handleTimePrepaidInitFinished = this.handleTimePrepaidInitFinished.bind(this);
    this.handleSumbitApplyCount = this.handleSumbitApplyCount.bind(this);
   
    // this.setState({
    //   start_time:"2015-12-23"
    // })  
    // debugger
  }

  componentWillMount(){
    // this.props.actions.actionCreator_fetchMoneyAccountList(DUID);

  }
 
  handleSumbitApplyCount(){

  }
 
  handleSearchChage(){

  }
  handleStartCalendarSelect(select_date,select_date_str){
    // debugger
    // findDOMNode(this.refs.input);
    this.props.actions.actionCreator_start_time_change_purchasesapply(select_date_str)
    this.refs.timePeriod.clearAllSelected()
  }
  handleEndCalendarSelect(select_date,select_date_str){
    // debugger
    // findDOMNode(this.refs.input);
    this.props.actions.actionCreator_end_time_change_purchasesapply(select_date_str)
    this.refs.timePeriod.clearAllSelected()
  }


  handleTimePrepaidChanged(start_timestamp,end_timestamp,start_time,end_time){
    
    this.props.actions.actionCreator_start_time_change_purchasesapply(start_time)

    this.props.actions.actionCreator_end_time_change_purchasesapply(end_time)
  }
  handleTimePrepaidInitFinished(start_timestamp,end_timestamp,start_time,end_time){
    this.props.actions.actionCreator_start_time_change_purchasesapply(start_time)

    this.props.actions.actionCreator_end_time_change_purchasesapply(end_time)
  }
  datePickerChange(){

  }

  render() {
   

    let table_config={
      bordered:false,
      striped:true

    }
   	

    console.log(this.props)
    // if(this.props.status==0){
      // return (<Loading  type='spinningBubbles' color='#3b3a3b' />)
    // }
    let periods=[
        {
          name:"今日",
          type:tpTypes.TIME_PERIOD_TODAY,
          isOn:false
        }
        ,{
          name:"本周",
          type:tpTypes.TIME_PERIOD_WEEK,
          isOn:true
        }
        ,{
          name:"本月",
          type:tpTypes.TIME_PERIOD_MONTH,
          isOn:false
        }
      ]


    // debugger;
    return (
      <div>
        <div className="search-bar">
          <Form>
          <FormControl className="form-input" name="search_content" label={'申请单号：'} placeholder="申请单号" />
          <FormControl className="form-select" name="company_name" label={'所属医院：'}  value="all" data={this.props.hospital_data} type="select" />
          <FormControl className="form-select" name="company_name" label={'状态：'}  value="all" data={this.props.status_data} type="select" />
          <Calendar  format="yyyy-MM-dd" ref="pm_start_calendar" value={this.props.start_time} onSelect={this.handleStartCalendarSelect} className="form-start-time" />
          -<Calendar format="yyyy-MM-dd" ref="pm_end_calendar" value={this.props.end_time} onSelect={this.handleEndCalendarSelect}  className="form-end-time" />

          <TimePeriod ref="timePeriod" onChange={this.handleTimePrepaidChanged} onInitFinished={this.handleTimePrepaidInitFinished} periods={periods}/>
          <Button  className="form-search"  status="primary"><Icon icon="search" />查询</Button>
          <div className="clear"></div>
          </Form>
        </div>
        <div className="content-nav-bar">
          <Button className="float-button" status="primary" onClick={this.handleSumbitApplyCount}>确认采购汇总</Button>
          <span>采购申请列表</span>
        </div>
        <div className="talbe-container">
          <Table ref="table"
            bordered={table_config.bordered}
            striped={table_config.striped}
            data={this.props.list}
            headers={[
              { name: 'create_time',header: '时间'},
              { name: 'aid', header: '申请单号' },
              { name: 'opreation', header: '申请医院' },
              { name: 'status', header: '状态' },
              { name: 'hospital_name', header: '操作' }
            ]} />
          </div>
        </div>
    )
  }
  openModal(type){
   	

  }
  addSubmit(){

  }
}

// 


// var iiii=2;
// MoneyAccount.propTypes = {
//   // limitBoxisChecked: PropTypes.bool
// };
function mapStateToProps(state,ownProps){
  
  // if(state.moneyAccount.errNo && state.moneyAccount.errNo!=0){
  //   Message.show(state.moneyAccount.errstr, "error",true);
  // }
  // if(state.moneyAccount.isCloseTip){
  //   Modal.close(_modalID)
  // }
  // return{
  //   status:state.moneyAccount.status,
  //   list: state.moneyAccount.list,
  //   errNo: state.moneyAccount.errNo,
  //   errstr: state.moneyAccount.errstr
  // }

  // debugger;

  // if(state.prepaymentManage.state==0){

  

  var list=[
      {
	      aid:1212,        
	      opreation:1,
	      status:1,
	      hospital_name:"2222",
	      create_time:"aaa"
      }
      ,{
      	  aid:1213,        
	      opreation:1,
	      status:1,
	      hospital_name:"2223",
	      create_time:"aaa"
      }
      ,{
      	  aid:1214,        
	      opreation:1,
	      status:1,
	      hospital_name:"2224",
	      create_time:"aaa"
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
       daiqueren: '待确认',
       yichuli: '已处理', 
       yiquxiao: '已取消' 
   }
  
   
   return{
      hospital_data:hospital_data,
      status_data:status_data,
      list:list,
      start_time:state.purchasestApply.start_time
      ,end_time:state.purchasestApply.end_time
   }
}

function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators({
        actionCreator_fetch_purchasesapply:actionCreator_fetch_purchasesapply
        ,actionCreator_start_time_change_purchasesapply:actionCreator_start_time_change_purchasesapply
        ,actionCreator_end_time_change_purchasesapply:actionCreator_end_time_change_purchasesapply
      },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchasesApply)


