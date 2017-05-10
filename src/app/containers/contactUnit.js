import React, {Component, PropTypes} from 'react';
import {Table, Modal, FormControl, Form, Checkbox, Message, Button, Icon, Input, FormSubmit,RadioGroup} from '../libs/rctui/index'
import {bindActionCreators} from 'redux'
import {fetch_contact_units,add_contact_unit,modify_contact_unit,del_contact_unit} from "../actions/contactUnit";
import {connect} from 'react-redux'
import {DUID} from '../globals'
import $ from 'jquery'
import Loading from '../libs/react-loading';
var _modalID = 0;

class ContactUnit extends Component {
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleModifyClick = this.handleModifyClick.bind(this);
        this.handleDelAccount = this.handleDelAccount.bind(this);  
        this.handleAddSubmit = this.handleAddSubmit.bind(this);  
        this.handleSearchFrom = this.handleSearchFrom.bind(this);  
        
        this.handleModiftSubmit = this.handleModiftSubmit.bind(this);  

        
    }



    componentWillMount() {
        
        this.props.actions.fetch_contact_units(DUID,"");


    }

    handleSearchFrom(formData) {
        var new_str = formData.search_text.replace(/(^\s*)|(\s*$)/g, "");
        this.props.actions.fetch_contact_units(DUID,new_str);
    }

    handleAddClick() {
        this.openModal("添加往来单位", this.handleAddSubmit)
    }
    handleAddSubmit(fromData){
        let is_customer=1,is_dealer=0;

        if(fromData.unit_type=="dealer"){
            is_customer=0
            is_dealer=1
        }

        this.props.actions.add_contact_unit(DUID,fromData.Name,fromData.PersonName,fromData.Phone,fromData.Discription,is_customer,is_dealer)
    }
    handleModifyClick(unit){
        this._modify_id=unit.Id;
        this.openModal("编辑往来单位", this.handleModiftSubmit,unit)

    }
    handleModiftSubmit(fromData){
        // debugger;
        let is_customer=1,is_dealer=0;

        if(fromData.unit_type=="dealer"){
            is_customer=0
            is_dealer=1
        }
        
        this.props.actions.modify_contact_unit(DUID,this._modify_id,fromData.Name,fromData.PersonName,fromData.Phone,fromData.Discription,is_customer,is_dealer)
    }
    handleDelAccount(unit){
// del_contact_unit
        debugger
        this.props.actions.del_contact_unit(DUID,unit.Id);
    }
    openModal(name,handle,data){
        var modal_data=data
        if(!data){
          modal_data={
            Name:""
            ,PersonName:""
            ,Phone:""
            ,Discription:""
            ,radio_group_value:"customer"
          }
        }else{
            if(modal_data.is_customer!=0){
                modal_data.radio_group_value="customer"
            }
            if(modal_data.is_dealer!=0){
                modal_data.radio_group_value="dealer"
            }
        }



        let radio_group_data=[
            {"id":"dealer","text":"经销商"}
            ,{"id":"customer","text":"客户"}
        ]

        _modalID=Modal.open({

          header: name,
          width: 480,
          height:330,
          buttons: {
           
            '取消': true
            ,'保存': 'submit'
          },
          content: (
            <Form onSubmit={handle}>
              <FormControl name="Name" label={'单位名称：'} value={modal_data.Name} grid={5/6} placeholder="" required={true}/>
              <FormControl name="PersonName" label={'联系人：'}  grid={5/6} placeholder="" value={modal_data.PersonName} />
              <FormControl name="Phone" label={'联系方式：'}  grid={5/6} placeholder="" value={modal_data.Phone} />
              <FormControl name="Discription" label={'备注：'}  grid={5/6} placeholder="" value={modal_data.Discription} />

              <FormControl name="unit_type" value={modal_data.radio_group_value} data={radio_group_data} type="radio-group"
 className="money-checkbox"  />
             
            </Form>
          )
        })
      }
      
              
    render() {
        let table_config = {
            bordered: false,
            striped: true

        }
        
       if(this.props.contactUnits.status==0){
            return (<Loading  type='spinningBubbles' color='#3b3a3b' />)
       }
        var {list} =this.props.contactUnits;
        

        return (
            <ul className="employee">
                <div className="employee_list">
                    <h3>账号列表</h3>
                    <div className="employee_search">
                        <Form onSubmit={this.handleSearchFrom}>
                            <FormControl type="text" name="search_text" className="search_txt"
                                         placeholder="请输入联系人/单位/联系方式"/>
                            <Button className="btn_search" status="primary" type="submit"></Button>
                        </Form>
                    </div>
                    <div className="add_employee" onClick={this.handleAddClick}>
                        <div className="addEmployee_icon"></div>
                        <a href="javascript:;">添加账号</a>
                    </div>
                </div>
                <div className="talbe-container">
                    <Table ref="table"
                           bordered={table_config.bordered}
                           striped={table_config.striped}
                           data={list}
                           headers={[
                               {name: 'Name', header: '单位'},
                                {name: 'PersonName', header: '联系人'},
                                {name: 'Phone', header: '联系方式'},
                                {name: 'Discription', header: '备注'},
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
                            ]}/>
                </div>
            </ul>
        )
    }
}

function mapStateToProps(state, ownProps) {

    if(state.contactUnits.errNo && state.contactUnits.errNo!=0){
        Message.show(state.contactUnits.errstr, "error",true);
      }
      if(state.contactUnits.isCloseTip){
        Modal.close(_modalID)
      }
   
    return {
        contactUnits:state.contactUnits
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetch_contact_units: fetch_contact_units,
            add_contact_unit:add_contact_unit,
            modify_contact_unit:modify_contact_unit,
            del_contact_unit:del_contact_unit
            
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUnit)
