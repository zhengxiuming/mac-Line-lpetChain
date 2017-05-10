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
    FormSubmit
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


class NewStockSheet extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);

    }
    componentWillMount() {
        this.props.actions.fetchEmployeeList(EMPLOYEEDUID, 0, "")
    }
    formSubmit(formData) {
        console.log(formData);
    }
    handleClick() {
        hashHistory.push("/stockCheck");
        //console.log(this.props)
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
                            <span className="title">新增盘库单</span>
                        </div>
                        <div className="backHistory">
                            <a href="javascript:;" onClick={this.handleClick.bind(this)}>返回库存盘点</a>
                        </div>
                        <div className="z_nav_hd clearfix">
                            <div className="hd_left">
                                <span className="title">创建于</span>
                                <span className="title titleTime">{this.props.title.create_time}</span>
                            </div>
                            <div className="hd_right">
                                <span className="title titleSheet">盘库单号:</span>
                                <span className="title titleSheet">{this.props.title.card}</span>
                            </div>
                        </div>
                    </div>
                    <div className="applySheetContent">
                            <h2>盘库单</h2>
                        <Form onSubmit={this.formSubmit}>
                            <div>
                                <ul className="apply_hospital gap clearfix">
                                    <li className="first">
                                        <span>所属医院：</span>
                                        <span>{this.props.title.pay_hospital}</span>
                                    </li>
                                    <li className="last">
                                        <FormControl type="select" className="form-select time" name="clearTime" label={'调拨日期：'} data={this.props.time}/>
                                    </li>
                                </ul>
                                <ul className="apply_hospital addOperate clearfix">
                                    <li className="operate_person">
                                        <FormControl type="select" className="form-select" name="operate" label={'操作人员：'} data={this.props.person}/>
                                    </li>
                                    <li className="remarks">
                                        <FormControl type="text" className="form-select form-width" name="remarks" label={'采购备注：'}/>
                                    </li>
                                </ul>
                            </div>
                            <div className="tableContent">
                                <div className="header_button clearfix">
                                    <h3>盘点商品清单</h3>
                                    <a href="javascript:;">删除选择</a>
                                    <a href="javascript:;">添加商品</a>
                                </div>
                                <Table ref="table"
                                        selectAble={true}
                                       bordered={table_config.bordered}
                                       striped={table_config.striped}
                                       data={this.props.list}
                                       height={346}
                                       headers={[
                                           { name: 'aid',header: '商品编号'},
                                           { name: 'time', header: '商品名称'},
                                           { name: 'purchase_people', header: '规格' },
                                           { name:'purchase_money',header:"单位"},
                                           { name:'last_clear',header:"厂家"},
                                           { name:'remain_clear',header:"调拨数量"},
                                           { name:'now_clear',header:"调拨价"},
                                           { name:'remarks',header:"合计金额"},
                                           { name: 'delete', header: '删除',width:48,
                                               content: (d) => {
                                                   return <a onClick={() => {this.handleDelAccount(d)}}><img src="http://baiduios.com/react-static/images/delete.png"/></a>;
                                               }
                                           }
                                       ]} />
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
};

function mapStateToProps(state, ownProps) {
    var list = [{
        aid: "P10000101",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."

    }, {
        aid: "P10000102",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000103",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000104",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000105",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000106",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000107",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000108",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000109",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000110",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000111",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
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
        title: title
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetchEmployeeList: fetchEmployeeList
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewStockSheet)