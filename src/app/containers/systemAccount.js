import React, {Component, PropTypes} from 'react';
import {
    Table,
    Modal,
    FormControl,
    Form,
    Checkbox,
    Message,
    Button,
    Icon,
    Input,
    FormSubmit,
    CheckboxGroup,
    FormItem
} from '../libs/rctui/index'
import {bindActionCreators} from 'redux'
import {
    systemAccount_fetch,
    systemAccount_addAccount,
    systemAccount_delAccount,
    fetchSystemNavList,
    searchEmployeeList,
    systemAccount_modifyAccount,
    systemAccount_bingAccount
} from "../actions/systemAccount";
import {connect} from 'react-redux'
import {EMPLOYEEDUID} from '../globals'
import $ from 'jquery'
import Loading from '../libs/react-loading';
var _modalID = 0;
var systemUid,accountUid = null;

class SystemAccount extends Component {
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleFromSubmit = this.handleFromSubmit.bind(this);
        this.handleNextStep = this.handleNextStep.bind(this);
       
        this.handleSearchFrom = this.handleSearchFrom.bind(this);
        this.handleBindAccountSubmit = this.handleBindAccountSubmit.bind(this);
        this.handleSearchEmpolyee = this.handleSearchEmpolyee.bind(this);
        this.permissionSettingSubmit = this.permissionSettingSubmit.bind(this);


        
    }
    componentWillMount() {
        this.props.actions.systemAccount_fetch(EMPLOYEEDUID, "");

        this.props.actions.fetchSystemNavList(EMPLOYEEDUID);
    }
    componentDidMount(){
        this.props.actions.searchEmployeeList(EMPLOYEEDUID,"");
    }
    //搜索账号提交
    handleSearchFrom(formData) {
        var new_str = formData.search_text.replace(/(^\s*)|(\s*$)/g, "");
        this.props.actions.systemAccount_fetch(EMPLOYEEDUID, new_str);
    }

    //添加账号提交
    handleFromSubmit(formData) {
        let employeeEid=null;
            if($("input[name='emList']:checked").length===1){
                $(".emList").each(function (index) {
                    if ($(this).is(":checked")) {
                        employeeEid = $(this).attr("data");
                    }
                })
        }else{
                alert("当前只能选择一个员工");
            }
        this.props.actions.systemAccount_addAccount(EMPLOYEEDUID, this.nextName,employeeEid);
        Modal.close(this.modalID)
    }
    //下一步
    handleNextStep(formData){
        Modal.close(this.modalID)
        this.nextName=formData.name;
        // this.bindModal("绑定账号", this.handleFromSubmit,this.props.empolyeelist);

         setTimeout(()=>{
            this.bindModal("绑定账号", this.handleFromSubmit,this.props.empolyeelist);
        } , 100);
    }
    //添加账号
    handleAddClick() {
        this.openModal("添加账号", this.handleNextStep)
    }

    //删除账号
    //删除账号
    handleDelAccount(data) {
        var systemAccount_delAccount = this.props.actions.systemAccount_delAccount;
        Modal.confirm('确定要删除账号“' + data.user_name + '”吗', () => {
            systemAccount_delAccount(EMPLOYEEDUID, data.uid)
        });
    }
    //权限设置
    handlePermissionSetting(data) {
        systemUid = data.uid;
        this.permissionModal("权限设置", this.permissionSettingSubmit);
    }
    //权限设置提交
    permissionSettingSubmit() {
        //console.log(systemUid)
        var modalData = {
            "chainmanage": {
                "can_read": $(".chainmanageRead").prop("checked"),
                "can_operate": $(".chainmanageOperate").prop("checked")
            },
            "membercard": {
                "can_read": $(".membercardRead").prop("checked"),
                "can_operate": $(".membercardOperate").prop("checked")
            },
            "customermanage": {
                "can_read": $(".customermanageRead").prop("checked"),
                "can_operate": $(".customermanageOperate").prop("checked")
            },
            "medicaltreatmentmanage": {
                "can_read": $(".medicaltreatmentmanageRead").prop("checked"),
                "can_operate": $(".medicaltreatmentmanageOperate").prop("checked")
            },
            "stockmanage": {
                "can_read": $(".stockmanageRead").prop("checked"),
                "can_operate": $(".stockmanageOperate").prop("checked")
            },
            "financemanage": {
                "can_read": $(".financemanageRead").prop("checked"),
                "can_operate": $(".financemanageOperate").prop("checked")
            },
            "standardmanage": {
                "can_read": $(".standardmanageRead").prop("checked"),
                "can_operate": $(".standardmanageOperate").prop("checked")
            },
            "reportmanage": {
                "can_read": $(".reportmanageRead").prop("checked"),
                "can_operate": $(".reportmanageOperate").prop("checked")
            },
            "marketingmanage": {
                "can_read": $(".marketingmanageRead").prop("checked"),
                "can_operate": $(".marketingmanageOperate").prop("checked")
            },
            "sysset": {"can_read": $(".syssetRead").prop("checked"), "can_operate": $(".syssetOperate").prop("checked")}
        }
        this.props.actions.systemAccount_modifyAccount(EMPLOYEEDUID, systemUid, 2, modalData);
        //console.log(modalData);
        Modal.close(this.modalID);
    }
    
    //绑定账号-编辑
    handleBindingSetting(d) {
        accountUid=d.uid;
        this.bindModal("绑定账号", this.handleBindAccountSubmit,this.props.empolyeelist);
    }
    handleDeleteAccount(data){
        var systemAccount_modifyAccount = this.props.actions.systemAccount_modifyAccount;
        Modal.confirm('解除绑定后该帐号将无法查看此员工信息！是否确认解除绑定？', () => {
            systemAccount_modifyAccount(EMPLOYEEDUID, data.uid,5,"")
        });
        //console.log(d);
    }
    //搜索员工提交
    handleSearchEmpolyee(d) {
        var text=$("#employeeSearch").val();
        this.props.actions.searchEmployeeList(EMPLOYEEDUID,text);
        Modal.close(this.modalID);
        setTimeout(()=>{
            this.bindModal("绑定账号", this.handleBindAccountSubmit,this.props.empolyeelist);
        } , 100);
    }
    //绑定账号提交
    handleBindAccountSubmit() {
        let employeeEid=null;
        if($("input[name='emList']:checked").length===1){
            $(".emList").each(function (index) {
                if ($(this).is(":checked")) {
                    employeeEid = $(this).attr("data");
                }
            })
        }else{
            alert("当前只能选择一个员工");
        }
        //console.log(accountUid,employeeEid);
        this.props.actions.systemAccount_bingAccount(EMPLOYEEDUID,accountUid,employeeEid);
        Modal.close(this.modalID)
    }
    //权限设置modal
    permissionModal(name, handle, data) {
        var modal_data = data;
        if (!data) {
            modal_data = {
                chainmanage: "",
            }
        }
        let table_config = {
                bordered: false,
                striped: true
            },

            _modalID = Modal.open({
                header: name,
                width: 800,
                height: 610,
                buttons: {
                    '保存': 'submit',
                    '取消': true
                },
                content: (
                    <Form onSubmit={handle}>
                        <Table
                            //ref={(c)=>{console.log(c)}}
                            bordered={table_config.bordered}
                            striped={table_config.striped}
                            data={this.props.navlist}
                            headers={[
                                {name: 'nav_name', header: '模块'},
                                {
                                    name: 'controller', header: '查看权限', width: 80,
                                    content: (name)=> {
                                        return <input className={name.controller + "Read"} type="checkbox"></input>
                                    }
                                },
                                {
                                    name: 'operate_permission', header: '操作权限', width: 80,
                                    content: (name)=> {
                                        return <input className={name.controller + "Operate"} type="checkbox"></input>
                                    }
                                }
                            ]}/>
                    </Form>
                )
            })
    }

    //绑定账号modal
    bindModal(name, handle, data) {
        //console.log(this.props.empolyeelist);



        let table_config = {
            bordered: false,
            striped: true
        }
        _modalID = Modal.open({
            header: name,
            width: 800,
            height: 610,
            buttons: {
                '绑定': 'submit',
                '取消': true
            },
            content: (
                <Form onSubmit={handle}>

                        <FormControl className="z_form" grid={2/2} label={"您可以将该帐号绑定在一个员工上"}>
                            <input type="text" id="readOnly" readOnly="true"/>
                            <span></span>
                            <span>搜索条件：</span>
                            <Input name="name" grid={1/3} id="employeeSearch" placeholder="员工姓名／手机号／所属医院"></Input>
                            <Button className="btn_search" status="primary" type="button" onClick={this.handleSearchEmpolyee}>
                                <Icon icon="search"></Icon>
                                查询
                            </Button>
                        </FormControl>
                    <Table
                        bordered={table_config.bordered}
                        striped={table_config.striped}
                        height={407}
                        data={data}
                        headers={[
                            {
                                name: 'eid', header: "选择",
                                content: (name)=> {
                                    return <input type="checkbox" name="emList" className="emList" data={name.eid}></input>
                                }
                            },
                            {
                                name: 'avatar', header: '照片',
                                content: (name) => {
                                    return <a className='employeePhoto'><img src={name.avatar}/></a>;
                                }
                            },
                            {name: 'name', header: '姓名'},
                            {name: 'phone', header: '联系方式'},
                            {name: 'h_name', header: '所属医院'},
                            {name: 'position', header: '职位'},
                        ]}/>
                </Form>
            )
        })

    }
    //添加账号modal
    openModal(name, handle, data) {
        var modal_data = data
        var select = this.props.list
        if (!data) {
            modal_data = {
                name: "",
            }
        }

        _modalID = Modal.open({
            header: name,
            width: 480,
            height: 330,
            buttons: {
                '下一步': 'submit',
                '取消': true
            },
            content: (
                <Form onSubmit={handle}>
                    <FormControl name="name" label={'员工姓名:'} value={modal_data.name}
                                 tip="该账号初始密码为111111，登录后请立即修改密码。该账号无权限设置。保存后请设置权限。" grid={5 / 6} placeholder="账号名称"
                                 required={true}/>
                </Form>
            )
        })
    }
    render() {


        let table_config = {
            bordered: false,
            striped: true
        }
        return (
            <ul className="employee">
                <div className="employee_list">
                    <h3>账号列表</h3>
                    <div className="employee_search">
                        <Form onSubmit={this.handleSearchFrom}>
                            <FormControl type="text" name="search_text" className="search_txt"
                                         placeholder="请输入帐户名"/>
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
                           data={this.props.list}
                           headers={[
                               {name: 'user_name', header: '账号'},
                               {
                                   name: 'employee_bind', header: '员工绑定',
                                   width: 96,
                                   content: (d)=> {
                                       return <a onClick={() => {
                                           d.employee_eid!=0?this.handleDeleteAccount(d):this.handleBindingSetting(d)
                                       }}>
                                           <div className={d.employee_eid!=0?"employeeDelete":"employeeBinding"}></div>
                                       </a>
                                   }
                               },
                               {
                                   name: 'permission_setting', header: '权限设置',
                                   width: 96,
                                   content: (d)=> {
                                       return <a onClick={() => {
                                           this.handlePermissionSetting(d)
                                       }}>
                                           <div className="permissionSetting"></div>
                                       </a>
                                   }
                               },
                               {
                                   name: 'delete', header: '删除', width: 48,
                                   content: (d) => {
                                       return <a onClick={() => {
                                           this.handleDelAccount(d)
                                       }}>
                                           <div className="deleteEmpolyee"></div>
                                       </a>;
                                   }
                               }
                           ]}/>
                </div>
            </ul>
        )
    }
}

function mapStateToProps(state, ownProps) {
    if (state.systemAccount.errNo && state.systemAccount.errNo != 0) {
        Message.show(state.systemAccount.errstr, "error", true);
    }
    if (state.systemAccount.isCloseTip) {
        Modal.close(_modalID)
    }
    //debugger
    return {
        status: state.systemAccount.status,
        list: state.systemAccount.list,
        empolyeelist: state.systemAccount.empolyeelist,
        navlist: state.systemAccount.navlist,
        errNo: state.systemAccount.errNo,
        errstr: state.systemAccount.errstr
    }
    //debugger
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            systemAccount_fetch: systemAccount_fetch,
            systemAccount_addAccount: systemAccount_addAccount,
            systemAccount_delAccount: systemAccount_delAccount,
            searchEmployeeList: searchEmployeeList,
            fetchSystemNavList: fetchSystemNavList,
            systemAccount_modifyAccount,
            systemAccount_bingAccount
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemAccount)


