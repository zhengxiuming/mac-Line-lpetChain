// import {SETTING_FETCH_REQUEST,SETTING_FETCH_SUCCESS,SETTING_FETCH_FAILURE} from '../actions/setting'

import * as ActionTypes from '../actions/login'




const reducer_login = (state={status:0}, action) => {
	switch (action.type){
		case ActionTypes.LOGIN_FETCH_REQUEST:
			return state
		case ActionTypes.LOGIN_FETCH_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){
				
		 		return Object.assign({}, state, {status:1,info:action.response.data,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}else{


	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.LOGIN_FETCH_FAILURE:
	 		return Object.assign({}, state,{status:-1})

	 	case ActionTypes.LOGOUT_FETCH_REQUEST:
			return state
		case ActionTypes.LOGOUT_FETCH_SUCCESS:
			if(action.response && action.response.errNo==0){
		 		return Object.assign({}, state, {status:1})
	 		}else{

	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.LOGOUT_FETCH_FAILURE:
	 		return Object.assign({}, state,{status:-1})

	 	default:
	 		return state
	}
	
}



// INSERT INTO chain_employee_manage (reg_code,chain_name,chain_address,dean_name,dean_phone,update_time,create_time) VALUES ('887sas','连锁测试分店2','北京市海淀区7省大院,'分店院长名字,'13388888888,'1472109712,'1472109712');


export default reducer_login