import React from "react";
import {DUID} from '../globals'

export default class BasicLpetInfo extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);


  }
  handleClick (){
    // this.props.data.hid
      // console.log(this.props.actions)
    this.props.actions.actionCreator_renameHospitals(DUID,this.props.data.hid,"美联综合宠爱搞搞好")
  }
     render(){
        console.log(this.props)
        let hospital={
          chain_name:"",
          chain_code:""
        }
        if (this.props.data) {
          hospital=this.props.data
        };
        
     	return (
     		<div className="lpet-basic-info">
                    <h3>连锁管理</h3>
                    <ul>
                        <li className="chain-name">连锁组名称 <span>{hospital.chain_name}</span></li>
                        <li className="modify-button" onClick={this.handleClick}>[修改名称]</li>
                        <li>加盟连锁码：</li>
                        <li><span>{hospital.chain_code}</span></li>
                        <li>(分院客户端加入时请输入此码认证)</li>
                    </ul>
                </div>
     	);
     }
}