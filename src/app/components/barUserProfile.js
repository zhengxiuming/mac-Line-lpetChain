import React from "react";

export default class BarUserProfile extends React.Component {
     
     render(){
     	return (
     		<div className="lpet-dashboard-bar">
                   <ul>
                       <li className="lpet-chain-name">联宠国际动物检测中心</li>
                       <li className="lpet-user">
                           <img src="public/images/profile_pic.svg" />李冰
                        </li>
                       <li><img src="public/images/rectangle-28.svg" /></li>
                       <li><img src="public/images/rectangle-29.svg" /></li>
                       <li>退出</li>
                   </ul>
                </div>
     	);
     }
}