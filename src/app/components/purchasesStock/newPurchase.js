/**
 * Created by zhengxiuming on 16/9/26.
 */
import React, {
    Component,
    PropTypes
} from 'react';
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
    Icon,
    FormSubmit,
    Tree,
    Input
} from '../../libs/rctui/index';
import {
    bindActionCreators
} from 'redux'

import {
    fetchEmployeeList
} from "../../actions/employee";

import {
    connect
} from 'react-redux'
import {
    DUID
} from '../../globals'
import $ from 'jquery'
import Loading from '../../libs/react-loading'
import {
    EMPLOYEEDUID
} from '../../globals';
var _modalID = 0;


class NewPurchase extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.addCommodity = this.addCommodity.bind(this);
        this.handleFromSubmit = this.handleFromSubmit.bind(this);
    }

    componentWillMount() {
        this.props.actions.fetchEmployeeList(EMPLOYEEDUID, 0, "")
    }

    formSubmit(formData) {
        console.log(formData);
    }

    handleClick() {
        hashHistory.push("/purchasesStock");
        //console.log(this.props)
    }

    handleFromSubmit(formData) {
        console.log(formData);
    }

    addCommodity() {
        this.openModal("添加商品", this.handleFromSubmit);
    }

    openModal(name, handle, data) {
        var modal_data = data
        if (!data) {
            modal_data = {
                footings: ""
            }
        }

        _modalID = Modal.open({
            header: name,
            width: 800,
            height: 733,
            buttons: {
                '确定': 'submit',
                '取消': true
            },
            content: (
                <Form onSubmit={handle}>
                    <FormControl className="z_form" grid={2 / 2}>
                        <input type="text" id="readOnly" readOnly="true"/>
                        <span></span>
                        <span>搜索条件：</span>
                        <Input name="name" grid={1 / 3} id="employeeSearch" placeholder="员工姓名／手机号／所属医院"></Input>
                        <Button className="btn_search" status="primary" type="button"
                                onClick={this.handleSearchEmpolyee}>
                            <Icon icon="search"></Icon>
                            查询
                        </Button>
                    </FormControl>
                    <div className="clearfix">
                        <div className="treeList treeList_scroll">
                            <div className="treeHd">分类列表</div>
                            <Tree
                                data={this.props.treeList}
                                readOnly={false}
                                selectAble={false}
                                greedy={true}
                                textTpl="{text}({id})"
                                valueTpl="{id}"
                                open={true}
                                sep={null}
                                height={210}

                            />
                        </div>
                        <div className="treeContent">
                            <div className="content-nav-bar">
                                <span>库存清单</span>
                            </div>
                            <div className="talbe-container">
                                <Table
                                    selectAble={true}
                                    bordered={false}
                                    striped={true}
                                    height={210}
                                    data={this.props.list}
                                    headers={[
                                        {name: 'aid', header: '商品编号'},
                                        {name: 'name', header: '商品名称'},
                                        {name: 'size', header: '规格'},
                                        {name: 'unit', header: '单位'}
                                    ]}/>
                            </div>
                        </div>
                    </div>
                    <div className="content-nav-bar">
                        <span>已选择商品</span>
                    </div>
                    <div className="talbe-container">
                        <Table
                            bordered={false}
                            striped={true}
                            data={this.props.list}
                            height={150}
                            headers={[
                                {name: 'aid', header: '商品编号'},
                                {name: 'name', header: '商品名称'},
                                {name: 'size', header: '规格'},
                                {name: 'unit', header: '单位'},
                                {name: 'transfer_num', header: '数量'},
                                {name: 'transfer_money', header: '进价'},
                                {name: 'total', header: '金额'},
                                { name:'status',header:"删除",
                                    content:(d)=>{
                                        return <a onClick={() => {this.handleDelAccount(d)}}><img src="http://baiduios.com/react-static/images/delete.png"/></a>
                                    }
                                }
                            ]}/>
                    </div>
                </Form>
            )
        })
    }

    render() {
        console.log(this.props.employees);
        let table_config = {
            bordered: false,
            striped: true
        }
        return (
            <div>
                <div className="matte"></div>
                <div className="applySheet">
                    <div className="z_applyHd">
                        <div className="z_nav">
                            <span className="title">新建采购单</span>
                        </div>
                        <div className="backHistory">
                            <a href="javascript:;" onClick={this.handleClick.bind(this)}>返回采购入库</a>
                        </div>
                        <div className="z_nav_hd clearfix">
                            <div className="hd_left">
                                <span className="title">创建于</span>
                                <span className="title titleTime">{this.props.title.create_time}</span>
                            </div>
                            <div className="hd_right">
                                <span className="title titleSheet">采购单号:</span>
                                <span className="title titleSheet">{this.props.title.card}</span>
                            </div>
                        </div>
                    </div>
                    <div className="applySheetContent">
                        <h2>采购单</h2>
                        <Form onSubmit={this.formSubmit}>
                            <div>
                                <ul className="apply_hospital gap clearfix">
                                    <li className="first">
                                        <span>往来单位：</span>
                                        <span>{this.props.title.pay_hospital}</span>
                                    </li>
                                    <li className="second">
                                        <FormControl type="select" className="form-select time" name="clearTime"
                                                     label={'采购类型：'} data={this.props.time}/>
                                    </li>
                                    <li className="last">
                                        <FormControl type="select" className="form-select time" name="clearTime"
                                                     label={'采购日期：'} data={this.props.time}/>
                                    </li>
                                </ul>
                                <ul className="apply_hospital addOperate clearfix">
                                    <li className="operate_person">
                                        <FormControl type="select" className="form-select" name="operate"
                                                     label={'操作人员：'} data={this.props.person}/>
                                    </li>
                                    <li className="remarks">
                                        <FormControl type="text" className="form-select form-width" name="remarks"
                                                     label={'采购备注：'}/>
                                    </li>
                                </ul>
                            </div>
                            <div className="tableContent">
                                <div className="header_button clearfix">
                                    <h3>采购商品清单</h3>
                                    <a href="javascript:;">删除选择</a>
                                    <a onClick={this.addCommodity} href="javascript:;">添加商品</a>
                                </div>
                                <Table ref="table"
                                       selectAble={true}
                                       bordered={table_config.bordered}
                                       striped={table_config.striped}
                                       data={this.props.list}
                                       height={346}
                                       headers={[
                                           {name: 'aid', header: '商品编号'},
                                           {name: 'name', header: '商品名称'},
                                           {name: 'size', header: '规格'},
                                           {name: 'unit', header: "单位"},
                                           {name: 'factory', header: "厂家"},
                                           {name: 'transfer_num', header: "调拨数量"},
                                           {name: 'transfer_money', header: "调拨价"},
                                           {name: 'total', header: "合计金额"},
                                           {
                                               name: 'delete', header: '删除', width: 48,
                                               content: (d) => {
                                                   return <a onClick={() => {
                                                       this.handleDelAccount(d)
                                                   }}><img
                                                       src="http://baiduios.com/react-static/images/delete.png"/></a>;
                                               }
                                           }
                                       ]}/>
                                <div className="total">
                                    合计采购商品
                                    <lable>52种</lable>
                                    ，
                                    合计采购数量<span>1000</span>，
                                    合计采购金额￥<span>100000</span>
                                </div>
                            </div>
                            <Button className="btn_search" status="primary" type="submit">
                                保存
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
;

function mapStateToProps(state, ownProps) {
    var treeList = [
        {
            "id": "all",
            "text": "全部商品",
            "icon": "user",
            "aa": "a"
        },
        {
            "id": "medical",
            "text": "处方",
            "icon": "user"
        },
        {
            "id": "check",
            "text": "检验",
            "icon": "user",
            "children": [
                {
                    "id": "medicine",
                    "text": "自制药品"
                },
                {
                    "id": "prescription",
                    "text": "处方粮"
                }
            ]
        },
        {
            "id": "commodity",
            "text": "商品",
            "icon": "cogs",
            "children": [
                {
                    "id": "commodity1",
                    "text": "商品1"
                },
                {
                    "id": "commodity2",
                    "text": "商品2"
                },
                {
                    "id": "commodity3",
                    "text": "商品3"
                },
                {
                    "id": "commodity4",
                    "text": "商品4"
                },
            ]
        },
        {
            "id": "beauty",
            "text": "美容",
            "icon": "cogs",
            "children": [
                {
                    "id": "beauty1",
                    "text": "美容1"
                },
                {
                    "id": "beauty2",
                    "text": "美容2"
                },
                {
                    "id": "beauty3",
                    "text": "美容3"
                },
                {
                    "id": "beauty4",
                    "text": "美容3"
                },
            ]
        }
    ]
    var list = [{
        aid: "P10000101",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000102",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000103",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000104",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000105",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000106",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000107",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000108",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000109",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000110",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }, {
        aid: "P10000111",
        size: "2.68ml",
        unit: "管",
        transfer_num: "100",
        transfer_money: "￥100.00",
        factory: "法国。。。",
        total: "￥10000.00",
        name: "福来恩够用杀虱滴剂"
    }]
    let hospital_data = {
        all: '所有医院',
        lianchong: '联宠国际动物检测中心',
        meilian: '美联众合',
        chongfuxin: '宠福鑫',
    }
    let time = [
        "2016.07.08", "2016.07.09", "2016.07.10", "2016.07.11"
    ]
    let person = [
        "李冰1",
        "李冰2",
        "李冰3",
        "李冰4",
    ]
    let title = {
        pay_hospital: "联宠国际动物检测中心望京分院",
        create_time: "2016.09.07",
        card: "CHW123910",
        account_payable: "30000.00",
        clear_payable: "30000.00"
    }
    return {
        employees: state.employee,
        list: list,
        hospital_data: hospital_data,
        time: time,
        person: person,
        title: title,
        treeList: treeList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetchEmployeeList: fetchEmployeeList
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPurchase)