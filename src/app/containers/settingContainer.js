import React, { Component, PropTypes } from 'react'

import SettingCard from '../components/settingCard'
import { connect } from 'react-redux'
import  BasicLpetInfo  from "../components/basicLpetInfo";
import {actionCreator_fetchHospitals,actionCreator_unbindHospitals,actionCreator_renameHospitals} from "../actions/setting"
import {DUID} from '../globals'

import { bindActionCreators } from 'redux'
class SettingContainer extends Component {

  componentWillMount(){


    this.props.actions.actionCreator_fetchHospitals(DUID)
  }
  render() {
    const { actions} = this.props;
    return (
      <div>
        <BasicLpetInfo data={this.props.headinfo} actions={actions}/>
        <div className="lpet-content">
          {this.props.hospitals.map(
              function(hospital,index){
                hospital.index=index+1;
                return <SettingCard key={hospital.bid} data={hospital} actions={actions}/>
              }
            )
          }
          <div className="clearn"></div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state,ownProps){
  let hospitals=[],headinfo=false
  if(state.setting.status==1){
    hospitals=state.setting.hospitals;
    headinfo=state.setting.headinfo;
  }
  return{
    hospitals:hospitals,
    headinfo:headinfo
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators({
        actionCreator_fetchHospitals:actionCreator_fetchHospitals,
        actionCreator_unbindHospitals:actionCreator_unbindHospitals,
        actionCreator_renameHospitals:actionCreator_renameHospitals
      },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer)



