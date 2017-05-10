// import {SETTING_FETCH_REQUEST,SETTING_FETCH_SUCCESS,SETTING_FETCH_FAILURE} from '../actions/setting'

import * as ActionTypes from '../actions/setting'

const reducer_setting = (state={status:0}, action) => {
	switch (action.type){
		case ActionTypes.SETTING_FETCH_REQUEST:
			return state
		case ActionTypes.SETTING_FETCH_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){
		 		return Object.assign({}, state, {status:1,headinfo:action.response.data.headinfo,hospitals:action.response.data.list})
	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo})
	 		}
		case ActionTypes.SETTING_FETCH_FAILURE:
	 		return Object.assign({}, state,{status:-1})

	 	case ActionTypes.SETTING_UNBIND_REQUEST:
			return state
		case ActionTypes.SETTING_UNBIND_SUCCESS:
			if(action.response && action.response.errNo==0){
		 		
				if(action.response.requestParams && action.response.requestParams.duid){
					// debugger
					let bid=action.response.requestParams.bid;
					let results=state.hospitals;
					var new_results=[];
					results.forEach(function(result){
						if(result.bid!=bid){
							new_results.push(result)
						}
					})

					// debugger;
				}
		 		return Object.assign({}, state,{status:1,hospitals:new_results})

	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo})
	 		}
		case ActionTypes.SETTING_UNBIND_FAILURE:
	 		return Object.assign({}, state,{status:-1})

	 	case ActionTypes.SETTING_RENAME_REQUEST:
			return state
		case ActionTypes.SETTING_RENAME_SUCCESS:
			if(action.response && action.response.errNo==0){
		 		
		 		let chain_name=action.response.requestParams.chain_name;
				let headinfo=state.headinfo;
				headinfo.chain_name=chain_name
				
				return Object.assign({}, state, {status:1,headinfo:headinfo})	
				// headinfo:action.response.data.headinfo
					// debugger;
			
		 		// return Object.assign({}, state,{status:1,hospitals:new_results})

		 		// return Object.assign({}, state,{})

	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo})
	 		}
		case ActionTypes.SETTING_RENAME_FAILURE:
	 		return Object.assign({}, state,{status:-1})
	 	default:
	 		return state
	}
	
}



// INSERT INTO chain_employee_manage (reg_code,chain_name,chain_address,dean_name,dean_phone,update_time,create_time) VALUES ('887sas','连锁测试分店2','北京市海淀区7省大院,'分店院长名字,'13388888888,'1472109712,'1472109712');


export default reducer_setting