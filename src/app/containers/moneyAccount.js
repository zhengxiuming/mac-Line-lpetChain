import React, { Component, PropTypes } from 'react'
import {Table,Modal,FormControl,Form,Checkbox,Message} from '../libs/rctui/index'
import { bindActionCreators } from 'redux'
import {actionCreator_addMoneyAccount,
  fetchMoneyAccountList,
  actionCreator_delMoneyAccountList,
  actionCreator_modifyMoneyAccountList} from "../actions/moneyAccount"
import { connect } from 'react-redux'
import {DUID} from '../globals'
import $ from 'jquery'
import Loading from '../libs/react-loading'

require('../styles/money.css')

var _modalID=0;

class MoneyAccount extends Component {
  constructor (props) {
    super(props);
    // this.configData = {
    //   max_limit:false
    // };
    this.state = {
      limitBoxisChecked:true
    };
    // props.limitBoxisChecked=true;
    this.handleAddClick = this.handleAddClick.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
    this.handleFromSubmit = this.handleFromSubmit.bind(this);
    this.handleModifyClick = this.handleModifyClick.bind(this);
    
  }
  handleFromSubmit(formData){
    this.props.actions.actionCreator_addMoneyAccount(DUID,formData.acount_name,formData.rate,formData.max_limit);
   
  }
  handleDelAccount(data){
    var actionCreator_delMoneyAccountList=this.props.actions.actionCreator_delMoneyAccountList;
    Modal.confirm('确定要删除账号“' + data.acount_name + '”吗', () => {
      actionCreator_delMoneyAccountList(DUID,data.aid)
    });
  }

  handleModifyClick(data){
    // 
    var actionCreator_modifyMoneyAccountList=this.props.actions.actionCreator_modifyMoneyAccountList;
    this.openModal("修改账号",(formData)=>{

      // duid,aid,acount_name,rate,max_limit
      actionCreator_modifyMoneyAccountList(DUID,data.aid,formData.acount_name,formData.rate,formData.max_limit)
      
    },data)

  }

  componentWillMount(){
    this.props.actions.fetchMoneyAccountList(DUID);

  }
  checkBoxChange(a,isChecked){
     if(!isChecked){
      $("#money_max_limit").prop( "disabled", true );
      
      }else{
       $("#money_max_limit").prop( "disabled", false );
      }
  }
  validatorForRate(a,b,c){
    // debugger;
  }
  handleRateChange(){
    // debugger
  }
  bingChangeCheckBox(){
    // debugger
  }

  handleAddClick(){
    // console.log(this.props)
    this.openModal("添加账号",this.handleFromSubmit)
  
    
  }
  openModal(name,handle,data){
    var modal_data=data
    if(!data){
      modal_data={
        acount_name:"",
        max_limit:"",
        rate:""
      }
    }

    _modalID=Modal.open({
      header: name,
      width: 480,
      height:330,
      buttons: {
        '创建': 'submit',
        '取消': true
      },
      content: (
        <Form onSubmit={handle}>
          <FormControl name="acount_name" label={'账号昵称：'} value={modal_data.acount_name} grid={5/6} placeholder="基础文本" required={true}/>
          <FormControl name="rate" label={'手续费率：'}  grid={5/6} placeholder="%" value={modal_data.rate}  validator={{ func: (value) => {
                  if(/^[0-9\.]*$/.test(value)){
                    return true;
                  }
                  return new Error('数据格式错误,请输入数字');
              }
            }}/>
          <FormControl id="money_max_limit" name="max_limit" grid={5/6} value={modal_data.max_limit} placeholder="￥0.00"
            validator={{ func: (value,form) => {
                 
                  if(/^[0-9\.]*$/.test(value) || !value){
                    return true;
                  }
                  return new Error('数据格式错误,请输入数字');
              },bind:"moneycheckbox"
            }}
            label={<Checkbox checked={this.state.limitBoxisChecked}  name="moneycheckbox" className="money-checkbox" text="单次交易上限" onChange={this.checkBoxChange}/>}
           />
        </Form>
      )
    })
  }
  render() {
   

    let table_config={
      bordered:false,
      striped:true

    }
   
   
    if(this.props.status==0){
      return (<Loading  type='spinningBubbles' color='#3b3a3b' />)
    }
    
    return (
      <div>
        <div className="content-nav-bar">
          <div className="add-button" onClick={this.handleAddClick}>添加用户</div>
          <span>账号列表</span>
        </div>
        <div className="talbe-container">
          <Table ref="table"
            bordered={table_config.bordered}
            striped={table_config.striped}
            data={this.props.list}
            headers={[
              { name: 'acount_name',header: '账号名称'},
              { name: 'rate', header: '手续费率' },
              { name: 'max_limit', header: '单次交易上限' },
              { name: 'edit', header: '编辑', width:48 ,
                content: (d) => {
                  return <a onClick={() => {this.handleModifyClick(d)}}><img src="http://baiduios.com/react-static/images/edit.png"/></a>;
                }
              },
              { name: 'delete', header: '删除',width:48,
                content: (d) => {
                  return <a onClick={() => {this.handleDelAccount(d)}}><img src="http://baiduios.com/react-static/images/delete.png"/></a>;
                }
              }
            ]} />
          </div>
        </div>
    )
  }
}



function mapStateToProps(state,ownProps){
  
  

  if(state.moneyAccount.errNo && state.moneyAccount.errNo!=0){
    Message.show(state.moneyAccount.errstr, "error",true);
  }
  if(state.moneyAccount.isCloseTip){
    Modal.close(_modalID)
  }
  return{
    status:state.moneyAccount.status,
    list: state.moneyAccount.list,
    errNo: state.moneyAccount.errNo,
    errstr: state.moneyAccount.errstr
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators({
        actionCreator_addMoneyAccount:actionCreator_addMoneyAccount,
        fetchMoneyAccountList:fetchMoneyAccountList,
        actionCreator_delMoneyAccountList:actionCreator_delMoneyAccountList,
        actionCreator_modifyMoneyAccountList:actionCreator_modifyMoneyAccountList
      },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyAccount)


