import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';
import HelpCenter from './helpCenter'

import DevTools from '../containers/DevTools'
let Lpetnav = React.createClass({
	render(){
		return (
			<div className="chain_body_left">
				<ul className="photo_set">
					<li>
						<a href="javascript:;">
							<img src="public/images/profile_pic.svg" alt="头像"/>
						</a>
					</li>
					<li>
						<span className="photo_name">李冰</span>
					</li>
					<li>
						<span className="hospital_name">联宠国际动物检测中心</span>
					</li>
				</ul>
				<ul className="banner">
					<li >
						<Link activeClassName="active" to="/SettingContainer"><img className="lpetNav_1"/>连锁管理</Link>
					</li>
                    <li >
                        <Link activeClassName="active" to="/Card"><img className="lpetNav_2"/>会员卡</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Client"><img className="lpetNav_3"/>顾客管理</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Medicine"><img className="lpetNav_4"/>医疗管理</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Repertory"><img className="lpetNav_5"/>库存管理</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Finance"><img className="lpetNav_6"/>财务管理</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Standard"><img className="lpetNav_7"/>标准化管理</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Statement"><img className="lpetNav_8"/>报表中心</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Marketing"><img className="lpetNav_9"/>营销中心</Link>
                    </li>
                    <li >
                        <Link activeClassName="active" to="/Systemsetting"><img className="lpetNav_10"/>系统设置</Link>
                    </li>
				</ul>
				<HelpCenter/>

                <DevTools />
			</div>
		)
	}
});
export default Lpetnav;