import React from "react";

export default class UserProfile  extends React.Component {
	render(){
		return (
			<div className="lpet-profile">
                    <p>
                      <img src="public/images/profile_pic.svg" />
                    </p>
                    <p>李冰</p>
                    <p>联宠国际动物检测中心</p>
               </div>
			);
	}
}