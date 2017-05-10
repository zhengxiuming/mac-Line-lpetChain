/**
 * Created by zhengxiuming on 16/10/9.
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
    Tree
} from '../libs/rctui/index'
import {
    bindActionCreators
} from 'redux'
import {
    actionCreator_fetch_stockSearch
}
    from "../actions/stockSearch";
import {
    connect
} from 'react-redux'
import {
    DUID
} from '../globals'
import $ from 'jquery'
import Loading from '../libs/react-loading'
import {
    EMPLOYEEDUID
} from '../globals';

var moment = require("moment")


var _modalID = 0;

class StockSearch extends Component {
    constructor(props) {
        super(props);
        this.handleSumbitApplyCount = this.handleSumbitApplyCount.bind(this);

    }

    componentWillMount() {
        // this.props.actions.actionCreator_fetch_transferClear(DUID);
    }

    handleSumbitApplyCount() {

    }

    handleClick(data) {
        console.log(data)
    }

    render() {
        let table_config = {
            bordered: false,
            striped: true
        }
        return (
            <div>
                <div className="search-bar">
                    <Form onSubmit={this.handleSearchSubmit}>
                        <FormControl type="text" className="form-input" name="search_content" grid={12/12} label={'搜索条件：'}
                                     placeholder="请输入商品名称/编号/拼音"/>
                        <FormControl type="select" className="form-select" name="search_content" label={'所属医院：'}
                                     data={this.props.hospital_data} placeholder="所有医院"/>
                        <Button className="form-search" type="submit" status="primary"><Icon icon="search"/>查询</Button>
                    </Form>
                </div>
                <div className="clearfix">
                    <div className="treeList">
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
                            onClick={this.handleClick}
                        />
                    </div>
                    <div className="treeContent">
                        <div className="content-nav-bar">
                            <span>库存清单</span>
                        </div>
                        <div className="talbe-container">
                            <Table ref="table"
                                   bordered={table_config.bordered}
                                   striped={table_config.striped}
                                   data={this.props.list}
                                   headers={[
                                       {name: 'aid', header: '商品编号'},
                                       {name: 'name', header: '商品名称'},
                                       {name: 'size', header: '规格'},
                                       {name: 'unit', header: '单位'},
                                       {name: 'maker', header: '厂家'},
                                       {name: 'stock', header: '库存'},
                                       {name: 'sell_price', header: '销售单价'},
                                       {name: 'cost_price', header: '成本单价'},
                                   ]}/>
                        </div>
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
        name: "福来恩狗用杀。。",
        size: "2.68ml",
        unit: '管',
        maker: "法国皇家。。",
        stock:"100",
        sell_price:"100.00",
        cost_price:"100.00"
    }, {
        aid: "P10000102",
        name: "福来恩狗用杀。。",
        size: "2.68ml",
        unit: '管',
        maker: "法国皇家。。",
        stock:"100",
        sell_price:"100.00",
        cost_price:"100.00"
    }, {
        aid: "P10000103",
        name: "福来恩狗用杀。。",
        size: "2.68ml",
        unit: '管',
        maker: "法国皇家。。",
        stock:"100",
        sell_price:"100.00",
        cost_price:"100.00"
    }, {
        aid: "P10000104",
        name: "福来恩狗用杀。。",
        size: "2.68ml",
        unit: '管',
        maker: "法国皇家。。",
        stock:"100",
        sell_price:"100.00",
        cost_price:"100.00"
    }]

    let hospital_data = {
        all: '所有医院',
        lianchong: '联宠国际动物检测中心',
        meilian: '美联众合',
        chongfuxin: '宠福鑫',
    }
    let status_data = {
        all: '所有',
        daiqueren: '待确认',
        yichuli: '已处理',
        yiquxiao: '已取消',
        yijujue: "已拒绝"
    }
    return {
        hospital_data: hospital_data,
        status_data: status_data,
        list: list,
        treeList: treeList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({actionCreator_fetch_stockSearch: actionCreator_fetch_stockSearch}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockSearch)