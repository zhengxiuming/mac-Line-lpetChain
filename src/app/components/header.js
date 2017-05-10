import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {logout_submit} from "../actions/login"


class Header extends Component {

    constructor (props) {
        super(props);
        this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);
    }

    componentWillMount(){
    }
    handleLogoutSubmit(){

      this.props.actions.logout_submit()
    }
    render(){
        var login_ele="";
        if(this.props.login_info){
               var {enterprise_id
            ,chain_name
            ,user_name
            ,avatar}=this.props.login_info;

            login_ele=<ul className="nav_right clearfix1">
                        <li className="nav_font"><span>{chain_name}</span></li>
                        <li className="nav_font"><span>|</span></li>
                        <li className="user_info">
                            <img className="anv_photo" src="public/images/profile_pic.svg" alt="默认头像"/>
                            <a className="user_name nav_font">{user_name}</a>
                            <div className="anv_arrow"></div>
                            <div className="anv_setting"></div>
                        </li>
                        <li className="last">
                            <a className="nav_font login_out" href="#" onClick={this.handleLogoutSubmit}>退出</a>
                        </li>
                    </ul>
        }

        return (
            <div className="header">
                <div className="hd_left">
                    <a href="##">
                        <img src="public/images/logo.svg" alt="logo"/>
                    </a>
                </div>
                <div className="hd_right">
                      {login_ele}
                </div>
            </div>
        )
    }
};


function mapStateToProps(state,ownProps){
  // let hospitals=[],headinfo=false

  if(state.loginInfo.errNo && state.loginInfo.errNo!=0){
    Message.show(state.loginInfo.errstr, "error",true);
  }
  if(state.loginInfo.status==1){
    window.location.href="login.html"
  }
  return{
    loginInfo:state.loginInfo
    // headinfo:headinfo
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators({
        logout_submit:logout_submit,
        // actionCreator_unbindHospitals:actionCreator_unbindHospitals,
        // actionCreator_renameHospitals:actionCreator_renameHospitals
      },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)