import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {DUID} from '../globals'

export default class SettingCard extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick (){
      // console.log(this.props.actions)
      this.props.actions.actionCreator_unbindHospitals(DUID,this.props.data.bid)
  }
  render() {
    return (
      <div className="card">
        <div className="index-box">{this.props.data.index}</div>
        <div className="hospital-name">{this.props.data.chain_name}</div>
        <ul>
          <li className="name">院长：{this.props.data.dean_name}</li>
          <li className="mobile">电话：{this.props.data.dean_phone}</li>
          <li className="addr">地址：{this.props.data.chain_address}</li>
        </ul>
        <div onClick={this.handleClick} className="delete">删除</div>
      </div>

    )
  }
}
