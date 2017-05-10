import React from 'react';
import Systemlist from '../components/syetemlist'
let Systemsetting = React.createClass({
    render(){
        return (
            <div className="indexBox">
                <div className="boxTitle">系统设置</div>
                <Systemlist/>
                {/*这里可以设置默认加载哪个模块*/}
                {this.props.children}
            </div>
        )
    }
});
export default Systemsetting;