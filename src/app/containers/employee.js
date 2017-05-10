import React, { Component, PropTypes } from 'react'
import {Table,Modal,FormControl,Form,Checkbox,Message,Select,Input,Pagination,Icon,Button} from '../libs/rctui/index'
import { connect } from 'react-redux';
import {fetchEmployeeList,fetchAddEmployee,fetchDelEmployee,fetchModifyEmpolyee} from "../actions/employee";
import {EMPLOYEEDUID} from '../globals';
import $ from 'jquery'
import Loading from '../libs/react-loading'
import { bindActionCreators } from 'redux';
var _modalID=0;

class Employee extends Component{
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleFromSubmit=this.handleFromSubmit.bind(this);
        this.handleJumpPage=this.handleJumpPage.bind(this);
        this.handleSearchFrom=this.handleSearchFrom.bind(this);
    }
    handleSearchFrom(formData){
        //去除字符空格
        var new_str=formData.search_text.replace(/(^\s*)|(\s*$)/g,"");
        this.props.actions.fetchEmployeeList(EMPLOYEEDUID,0,new_str)
    }
    handleJumpPage(p){
        this.props.actions.fetchEmployeeList(EMPLOYEEDUID,p,"")
    }
    handleDelAccount(data){
      var fetchDelEmployee=this.props.actions.fetchDelEmployee;
      Modal.confirm('确定要删除账号“' + data.name + '”吗', () => {
        fetchDelEmployee(EMPLOYEEDUID,data.eid)
      });
    }
    handleModifyClick(data){
      var fetchModifyEmpolyee=this.props.actions.fetchModifyEmpolyee;
      this.openModal("修改账号",(formData)=>{
        fetchModifyEmpolyee(EMPLOYEEDUID,data.eid,formData.name,formData.phone,formData.h_name,formData.position,formData.is_stockholder)
        
      },data)

    }
    
    componentWillMount(){
        this.props.actions.fetchEmployeeList(EMPLOYEEDUID,0,"");
    }
    handleAddClick(){
        this.openModal("添加员工",this.handleFromSubmit)
    }
    handleFromSubmit(formData){
        this.props.actions.fetchAddEmployee(EMPLOYEEDUID,formData.name,formData.phone,formData.h_name,formData.position,formData.is_stockholder);
        Modal.close(this.modalID)
    }
    openModal(name,handle,data){
    var modal_data=data
    var select=this.props.list
    if(!data){
      modal_data={
        name:"",
        phone:"",
        h_name:"",
        position:'',
        is_stockholder:''
      }
    }

    this.modalID=Modal.open({
      header: name,
      width: 480,
      height:330,
      buttons: {
        '创建': 'submit',
        '取消': true
      },
      content: (
        <Form onSubmit={handle}>
          <FormControl name="name" label={'员工姓名:'} value={modal_data.name} grid={5/6} placeholder="员工姓名" required={true}/>
          <FormControl name="phone" label={'联系方式:'} value={modal_data.phone} grid={5/6} placeholder="联系方式"/>
          <FormControl type="select" data={this.props.belonghsplist} value={modal_data.h_name} name="h_name" label={"所属医院:"} grid={5/6} placeholder="所属医院" required={true}/>
          <FormControl type="select" data={this.props.positionlistarray} name="position" label={'职位:'} value={modal_data.position} grid={5/6} placeholder="职位" required={true}/>
          <FormControl name="is_stockholder" data={{"0":'否',"1":"是"}} type="radio-group" label={'是否股东:'} value={modal_data.is_stockholder} grid={5/6} placeholder="是否股东"/>
        </Form>
      )
    })
  }
    render(){
        let table_config={
            bordered:false,
            striped:true
            }
        const {actions} = this.props;
        return(
            <ul className="employee">
                <div className="employee_list">
                    <h3>员工列表</h3>
                    <div className="employee_search">
                        <Form onSubmit={this.handleSearchFrom}>
                            <FormControl type="text" name="search_text" className="search_txt" placeholder="请输入姓名/医院/联系方式"/>
                            <Button className="btn_search" status="primary" type="submit" ></Button>
                        </Form>
                    </div>
                    <div className="add_employee" onClick={this.handleAddClick}>
                        <div className="addEmployee_icon"></div>
                        <a href="javascript:;">添加员工</a>
                    </div>
                </div>
                <div className="talbe-container">
                          <Table ref="table"
                            bordered={table_config.bordered}
                            striped={table_config.striped}
                            data={this.props.list}
                            headers={[
                                { name: 'avatar', header: '照片' ,
                                    content: (name) => {
                                  return <a className='employeePhoto'><img src={name.avatar}/></a>;
                                }
                                },
                                { name: 'name',header: '姓名'},
                                { name: 'phone', header: '联系方式' },
                                { name: 'h_name', header: '所属医院' },
                                { name: 'position', header: '职位' },
                                { name: 'is_stockholder', header: '是否股东' ,
                                    content:(name)=>{
                                        return name.is_stockholder==0?"否":"是"
                                    }
                                },
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
                <Pagination total={this.props.totalCount} jumper={true} onChange={this.handleJumpPage} size={25}/>
            </ul>
        )
    }
}

function mapStateToProps(state,ownProps){
    // debugger
    let list=[];
    if(state.employee.errNo && state.employee.errNo!=0){
      Message.show(state.employee.errstr, "error",true);
    }
    if(state.employee.isCloseTip){
        Modal.close(_modalID)
    }
    debugger
    return{
        status:state.employee.status,
        list: state.employee.list,
        errNo: state.employee.errNo,
        errstr: state.employee.errstr,
        belonghsplist:state.employee.belonghsplist,
        positionlistarray:state.employee.positionlistarray,
        totalCount:state.employee.totalCount
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({
            fetchEmployeeList:fetchEmployeeList,
            fetchAddEmployee:fetchAddEmployee,
            fetchDelEmployee:fetchDelEmployee,
            fetchModifyEmpolyee:fetchModifyEmpolyee
        },dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee)