import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

import {Form,FormControl,Button,Message} from '../libs/rctui/index'

import {login_submit} from "../actions/login"

import { bindActionCreators } from 'redux'
class LoginContainer extends Component {

  constructor (props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  componentWillMount(){


    
  }
  handleLoginSubmit(formData){

    this.props.actions.login_submit(formData.acount_name,formData.acount_pwd)
  }
  render() {
    const { actions} = this.props;
    return (
      <section className="column is-offset-6 is-4">
    
       <Form onSubmit={this.handleLoginSubmit}>
          <FormControl name="acount_name" label={'账号：'}  placeholder="" required={true}/>
          <FormControl name="acount_pwd" label={'密码：'} type="password" placeholder="" required={true} tip=""/>
          <Button  className="form-search" type="submit" status="primary">登陆</Button>
       </Form>
      </section>
    )
  }
}
function mapStateToProps(state,ownProps){
  // let hospitals=[],headinfo=false

  if(state.loginInfo.errNo && state.loginInfo.errNo!=0){
    Message.show(state.loginInfo.errstr, "error",true);
  }
  if(state.loginInfo.status==1){
    window.location.href="/"
  }
  return{
    loginInfo:state.loginInfo
    // headinfo:headinfo
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators({
        login_submit:login_submit,
        // actionCreator_unbindHospitals:actionCreator_unbindHospitals,
        // actionCreator_renameHospitals:actionCreator_renameHospitals
      },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)



