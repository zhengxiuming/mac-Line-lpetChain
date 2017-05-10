/**
 * Created by zhengxiuming on 2016/10/12.
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
    Icon,

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
import RevenueRanking from '../revenueRanking';

class revenuePaidSheet extends Component {
    componentWillMount() {
        //this.props.actions.fetchEmployeeList(EMPLOYEEDUID,0,"")
    }

    handleClick() {
        hashHistory.push("/revenueManage");
        //console.log(this.props)
    }
    onChartReady(chart) {
        setTimeout(function () {
            chart.hideLoading();
        }, 1000);
    }

    getOption1() {
        const option = {
            title: {
                text: '上缴合计',
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
                data: ['银行卡', '支付宝', '微信', '现金']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: true,
                    data: [
                        {value: 335, name: '银行卡'},
                        {value: 234, name: '支付宝'},
                        {value: 135, name: '微信'},
                        {value: 148, name: '现金'}
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
    getOption2() {
        const option = {
            title: {
                text: '营业额合计',
                subtext: "¥1,212,000.00",
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
                data: ['银行卡', '支付宝', '微信', '现金',"POS1","POS2"]
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: true,
                    data: [
                        {value: 335, name: '银行卡'},
                        {value: 234, name: '支付宝'},
                        {value: 135, name: '微信'},
                        {value: 148, name: '现金'},
                        {value: 1480, name: 'POS1'},
                        {value: 600, name: 'POS2'}
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
    getOption3() {
        const option = {
            title: {
                text: '营业额合计',
                subtext: "¥1,212,000.00",
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
                data: ['处方', '美容', '疫苗', '化验',"手术","商品"]
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: true,
                    data: [
                        {value: 335, name: '处方'},
                        {value: 234, name: '美容'},
                        {value: 135, name: '疫苗'},
                        {value: 148, name: '化验'},
                        {value: 148, name: '手术'},
                        {value: 148, name: '商品'}
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
        console.log(this.props);
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
                            <span className="title">营收上缴单</span>
                        </div>
                        <div className="backHistory">
                            <a href="javascript:;" onClick={this.handleClick.bind(this)}>返回营收管理</a>
                        </div>
                        <div className="z_nav_hd clearfix">
                            <div className="hd_left">
                                <span className="title">创建于</span>
                                <span className="title titleTime">{this.props.title.create_time}</span>
                                <span className="title">联宠国际动物检测中心</span>
                            </div>
                            <div className="hd_right">
                                <span className="title titleSheet">单号:</span>
                                <span className="title titleSheet">{this.props.title.card}</span>
                            </div>
                        </div>
                    </div>
                    <div className="applySheetContent">
                        <h2>营收上缴单汇总</h2>
                        <div>
                            <ul className="apply_hospital operator clearfix">
                                <li>
                                    <span>操作人员：</span>
                                    <span>李冰</span>
                                </li>
                                <li>
                                    <span>备注：</span>
                                    <span>...</span>
                                </li>
                            </ul>
                        </div>
                        <ul className="paid-echarts">
                            <li>
                                <div className="headline clearfix">
                                    <div className="index">1</div>
                                    <ul className="headline-stack">
                                        <li className="headline-top">当期营收上缴汇总</li>
                                        <li className="headline-bottom">上缴汇总为实际营业收入的汇总，不等同于营业额</li>
                                    </ul>
                                </div>
                                <div className="clearfix echarts-content">
                                    <div className="react-echarts">
                                        <ReactEcharts
                                            option={this.getOption1()}
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
                            </li>
                            <li>
                                <div className="headline clearfix">
                                    <div className="index">2</div>
                                    <ul className="headline-stack">
                                        <li className="headline-top">当前营业额汇总</li>
                                        <li className="headline-bottom">营业额为当前医院实际主营业务的销售额，本表记录了各结算方式的销售额情况</li>
                                    </ul>
                                </div>
                                <div className="clearfix echarts-content">
                                    <div className="react-echarts">
                                        <ReactEcharts
                                            option={this.getOption2()}
                                            style={{height: '450px', width: '100%'}}
                                            className='react_for_echarts'
                                            showLoading={true}
                                            onChartReady={this.onChartReady}
                                        />
                                    </div>
                                    <div className="content-nav-bar data-ranking">
                                        <span>当期营业额排行</span>
                                        <RevenueRanking data={this.props.revenueList}/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="headline clearfix">
                                    <div className="index">3</div>
                                    <ul className="headline-stack">
                                        <li className="headline-top">当期营业额分类汇总</li>
                                        <li className="headline-bottom">经营分类汇总记录了当期医院各经营模块的销售额情况</li>
                                    </ul>
                                </div>
                                <div className="clearfix echarts-content">
                                    <div className="react-echarts">
                                        <ReactEcharts
                                            option={this.getOption3()}
                                            style={{height: '450px', width: '100%'}}
                                            className='react_for_echarts'
                                            showLoading={true}
                                            onChartReady={this.onChartReady}
                                        />
                                    </div>
                                    <div className="content-nav-bar data-ranking">
                                        <span>当期营业额经营分类排行</span>
                                        <RevenueRanking data={this.props.revenueList}/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
;

function mapStateToProps(state, ownProps) {

    let hospital_data = {
        all: '所有医院',
        lianchong: '联宠国际动物检测中心',
        meilian: '美联众合',
        chongfuxin: '宠福鑫',
    }
    let time = [
        "2016.07.08", "2016.07.09", "2016.07.10", "2016.07.11"
    ]
    let title = {
        pay_hospital: "联宠国际动物检测中心望京分院",
        create_time: "2016.09.07",
        card: "CHW123910",
        account_payable: "30000.00",
        clear_payable: "30000.00"
    }
    let revenueList=[
        {name:"银行卡",money:"335"},
        {name:"支付宝",money:"1200"},
        {name:"微信",money:"189"},
        {name:"现金",money:"1100"}
    ]
    return {
        employees: state.employee,
        hospital_data: hospital_data,
        time: time,
        title: title,
        revenueList:revenueList

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetchEmployeeList: fetchEmployeeList
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(revenuePaidSheet)