import React, { Component, PropTypes } from 'react'
import {Table,Modal,FormControl,Form,Message,Datepicker,FormItem,Button,Icon} from '../libs/rctui/index'
import { bindActionCreators } from 'redux'
import {actionCreator_fetch_prepaymentList
  ,actionCreator_datestart_change_prepayment
  ,actionCreator_dateend_change_prepayment
  ,add_prepayment
  } from "../actions/prepaymentManage"



import {fetchEmployeeList} from "../actions/employee";
import {fetch_contact_units} from "../actions/contactUnit";
import {fetchMoneyAccountList} from "../actions/moneyAccount"

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


export const PREPAYMENT_TYPE_PAY='PREPAYMENT_TYPE_PAY'
export const PREPAYMENT_TYPE_PURCH='PREPAYMENT_TYPE_PURCH'

var _modalID=0;

class PrepaymentManage extends Component {
  constructor (props) {
    super(props);
    this.handlePrepaidClick = this.handlePrepaidClick.bind(this);
    this.handleTransferClick = this.handleTransferClick.bind(this);
    this.handleStartCalendarSelect = this.handleStartCalendarSelect.bind(this);
    this.handleEndCalendarSelect = this.handleEndCalendarSelect.bind(this);
    this.handleTimePrepaidChanged = this.handleTimePrepaidChanged.bind(this);
    this.handleTimePrepaidInitFinished = this.handleTimePrepaidInitFinished.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.addSubmit = this.addSubmit.bind(this);
  }

  componentWillMount(){
    if(this.props.status==0){
      let page_num=1
        ,companyid=0
        ,query=0
        ,datestart=0
        ,dateend=0

      this.props.actions.actionCreator_fetch_prepaymentList(DUID,page_num,companyid,query,datestart,dateend);
    }
    if(this.props.employees.status==0){
      this.props.actions.fetchEmployeeList(EMPLOYEEDUID,1,"")
    }

    if(this.props.contactUnits.status==0){
      this.props.actions.fetch_contact_units(DUID,"")
    }
    if(this.props.moneyAccount.status==0){
      this.props.actions.fetchMoneyAccountList(DUID)
    }
  }
 

  handleTransferClick(){
    
  
    console.log("预付转账");

    this.openModal(PREPAYMENT_TYPE_PAY);
  }
  handlePrepaidClick(){
   
  	console.log("充预付款");
    this.openModal(PREPAYMENT_TYPE_PURCH);

   
  }
  handleSearchChage(){

  }
  handleSearchSubmit(formData){
    let page_num=1
        // ,billno=0
        ,companyid=0
        ,query=0
    
      
      // company_name
      if(formData.search_content){
        query=formData.search_content
      }
      if(formData.company_id){
        companyid=formData.company_id
      }

    this.props.actions.actionCreator_fetch_prepaymentList(DUID,page_num,companyid,query,this.datestartstamp,this.dateendstamp);
  }

  handleStartCalendarSelect(select_date,select_date_str){
    
    // findDOMNode(this.refs.input);
    this.props.actions.actionCreator_datestart_change_prepayment(select_date_str)
    this.refs.timePeriod.clearAllSelected()
    this.datestartstamp=select_date.valueOf()/1000
    
  }
  handleEndCalendarSelect(select_date,select_date_str){
    // debugger
    // findDOMNode(this.refs.input);
    this.props.actions.actionCreator_dateend_change_prepayment(select_date_str)
    this.refs.timePeriod.clearAllSelected()

    this.dateendstamp=select_date.valueOf()/1000
  }


  handleTimePrepaidChanged(datestartstamp,dateendstamp,datestart,dateend){
    

    this.props.actions.actionCreator_datestart_change_prepayment(datestart)

    this.props.actions.actionCreator_dateend_change_prepayment(dateend)

    this.datestartstamp=datestartstamp/1000;
    this.dateendstamp=dateendstamp/1000;


  }
  handleTimePrepaidInitFinished(datestartstamp,dateendstamp,datestart,dateend){
    this.props.actions.actionCreator_datestart_change_prepayment(datestart)

    this.props.actions.actionCreator_dateend_change_prepayment(dateend)
    this.datestartstamp=datestartstamp/1000;
    this.dateendstamp=dateendstamp/1000;
  }
  datePickerChange(){

  }

  render() {
   

    let table_config={
      bordered:false,
      striped:true

    }
   	

    console.log(this.props)
    if(this.props.status==0 || this.props.contactUnits.status==0){
      return (<Loading  type='spinningBubbles' color='#3b3a3b' />)
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
      let select_type=this.props.period_type;
    
      let units=this.props.contactUnits.list,search_company_data={};
      units.forEach((item)=>{
        search_company_data[item.Id]=item.Name;
      })
      search_company_data["0"]="所有单位";


      this.props.list.forEach((item)=>{
        var start_date = new Date(parseInt(item.create_time)*1000);
        let start_moment=moment(start_date);
        let start_time=start_moment.format('YYYY-MM-DD HH:mm:ss')
        
        item.start_time=start_time
      })



    return (
      <div>
        <div className="search-bar">
          <Form onSubmit={this.handleSearchSubmit}>
          <FormControl className="form-input" name="search_content" label={'搜索条件：'} placeholder="往来单位名称/单号" />
          <FormControl className="form-select" name="company_id" label={'往来单位：'}  data={search_company_data} type="select" placeholder="所有单位" />

          <Calendar  format="yyyy-MM-dd" ref="pm_start_calendar" value={this.props.datestart} onSelect={this.handleStartCalendarSelect} className="form-start-time" />

          -<Calendar format="yyyy-MM-dd" ref="pm_end_calendar" value={this.props.dateend} onSelect={this.handleEndCalendarSelect}  className="form-end-time" />
          <TimePeriod ref="timePeriod" onChange={this.handleTimePrepaidChanged} onInitFinished={this.handleTimePrepaidInitFinished} periods={periods} />
          <Button  className="form-search" type="submit" status="primary"><Icon icon="search" />查询</Button>
          <div className="clear"></div>
          </Form>
        </div>
        <div className="content-nav-bar">
          <div className="add-button" onClick={this.handlePrepaidClick}>充预付款</div>
          <div className="add-button" onClick={this.handleTransferClick}>预付转账</div>
          <span>预付明细</span>
        </div>
        <div className="talbe-container">
          <Table ref="table"
            bordered={table_config.bordered}
            striped={table_config.striped}
            data={this.props.list}
            headers={[
              { name: 'start_time',header: '时间'},
              { name: 'bill_no', header: '单号' },
              { name: 'company_name', header: '往来单位' },
              { name: 'type', header: '类型' },
              { name: 'amount_money', header: '金额' },
              { name: 'advance_charge_balance', header: '预付款余额' }
            ]} />
          </div>
        </div>
    )
  }
  openModal(type){
    let submit_title="充值",info_name="充款",title="冲预付款"

    // total=this.props.statistics.purch_total;

    if(type==PREPAYMENT_TYPE_PAY){
        submit_title="支付"
        info_name="预付"
        title="预付账款"
        // total=this.props.statistics.pay_total
    }
    this.modal_type=type;

    let buttons={'取消': true}
    buttons[submit_title]='submit'

   

    let employees=this.props.employees.list,op_data={};

    employees.forEach((employee)=>{
      op_data[employee.eid]=employee.name;
    })

    let units=this.props.contactUnits.list,company_data={};
      units.forEach((item)=>{
        company_data[item.Id]=item.Name;
      })

    _modalID=Modal.open({
      header: title,
      width: 480,
      buttons: buttons,
      content: (
        <div className="prepayment-dialog">
          <Form onSubmit={this.addSubmit}>
            <div className="line-info">信息<div></div></div>
            <FormControl className="dn-select" name="employee_id" label={'操作人员：'} data={op_data}  type="select" placeholder="请选择" />
            <FormControl className="dn-select dn-required" name="company_id" label={'往来单位：'}  data={company_data} type="select" placeholder="请选择" required={true}/>
           
            <FormControl className="dn-input dn-input-textarea" name="notes" label={'备注：'}  type="textarea" rows={3} placeholder="" />
            <div className="line-info">{info_name}<div></div></div>
            {this.props.moneyAccount.list.map(
                function(account,index){
                  let label_name=account.acount_name+"："
                  let ele_name="acount_name_"+account.aid;
                  return <FormControl className="dn-input account_input" name={ele_name} label={label_name} grid={1/1} placeholder="￥0.00"  validator={{ func: (value) => {
                                if(/^[0-9\.]*$/.test(value)){
                                  let total=0;
                                  $("input.account_input").each((index,acc_ele)=>{
                                    if (acc_ele.value) {
                                      total+=parseInt(acc_ele.value)
                                    };
                                    
                                    // console.log(acc_ele.value)
                                  })
                                  // console.log(total)

                                  $(".propayment-total").text(total)

                                  return true;
                                }
                                if(!value){
                                  return true
                                }
                                return new Error('数据格式错误,请输入数字');
                            }
                          }}/>
            
                }
              )
            }
            <div className="count_info">预付款余额:<label>￥ {this.props.prepaymentbalance+""}</label>合计{info_name}:<span className="propayment-total">0.00</span></div>
          </Form>
        </div>
      )
    })
  }
  addSubmit(fromData){

      // http://lpetchain.goudaifu.com/stockmanage/v1/stockcharge?eid=11&company_id=11&charges=[{aid:12,amount:87.9}]
      

      let post_params={
        eid:0,
        company_id:fromData.company_id,
        notes:""
      }

      if (fromData.employee_id) {
        post_params.eid=fromData.employee_id
      };

      if (fromData.notes) {
        post_params.notes=fromData.notes
      };

      let array_key="charges";
      if (this.modal_type==PREPAYMENT_TYPE_PAY){
        array_key="prepayments"
      }

      this.props.moneyAccount.list.forEach((item)=>{
          let amount=fromData["acount_name_"+item.aid]
          if(amount){
            if(!post_params[array_key]){
                post_params[array_key]=[]
            }

            post_params[array_key].push({aid:item.aid,amount:amount})
          }
      })
      console.log(post_params)
      
       
      this.props.actions.add_prepayment(DUID,post_params)
  }
}


function mapStateToProps(state,ownProps){
  
   return{
      ...state.prepaymentManage
      ,employees:state.employee         //员工列表
      ,contactUnits:state.contactUnits  //往来单位
      ,moneyAccount:state.moneyAccount  //资金账号
    }


}

function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators({
        actionCreator_fetch_prepaymentList:actionCreator_fetch_prepaymentList
        ,actionCreator_datestart_change_prepayment:actionCreator_datestart_change_prepayment
        ,actionCreator_dateend_change_prepayment:actionCreator_dateend_change_prepayment
        ,fetchEmployeeList:fetchEmployeeList
        ,fetch_contact_units:fetch_contact_units
        ,fetchMoneyAccountList:fetchMoneyAccountList
        ,add_prepayment:add_prepayment
      },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrepaymentManage)


