import React from "react";
import Lpetnav from "./lpetnav";
import UserProfile from "./userProfile";


export default class Sidebar extends React.Component {

	render(){
		return (
			<div>
			  <p className="lpet-title" ><img src="public/images/logo.svg" /></p>
                <UserProfile />
                <Lpetnav />
                <div className="lpet-nav-footer">
                    <p>帮助中心|联系客服</p>
                </div>
            </div>
			);
	}
}