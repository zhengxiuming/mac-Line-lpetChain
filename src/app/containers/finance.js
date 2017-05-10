import React from 'react';
import FinanceList from '../components/financeList';

let Finance = React.createClass({
    render() {
        return (
            <div className="indexBox">
                <div className="boxTitle">财务管理</div>
                <FinanceList/>
                {/*这里可以设置默认加载哪个模块*/}
                {this.props.children}
            </div>
        )
    }
});
export default Finance;
