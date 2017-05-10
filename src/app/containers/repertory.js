import React from 'react';
import RepertoryList from '../components/repertoryList'


let Repertory = React.createClass({
    render(){
        return (
          
            <div className="indexBox">
                <div className="boxTitle">库存管理</div>
                <RepertoryList/>
                {/*这里可以设置默认加载哪个模块*/}
                {this.props.children}
            </div>
        )
    }
});
export default Repertory;