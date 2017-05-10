import * as ActionTypes from '../actions/moneyAccount'

const reducer_money_account = (state={status:0}, action) => {
	switch (action.type){
		case ActionTypes.MONEY_ADD_REQUEST:
			return state
		case ActionTypes.MONEY_ADD_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){
					// debugger
				let aid=action.response.data.bid;
				let acount_name=action.response.requestParams.acount_name;
				let max_limit=action.response.requestParams.max_limit;
				let rate=action.response.requestParams.rate;

				var new_list=state.list
				var item={
					aid:aid
					,acount_name:acount_name
					,max_limit:max_limit
					,rate:rate
				}
				new_list.push(item);
		 		return Object.assign({}, state, {status:1,list:new_list,isCloseTip:true,errNo:0})
	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.MONEY_ADD_FAILURE:
	 		return Object.assign({}, state,{status:-1})


	 	case ActionTypes.MONEY_FETCH_REQUEST:
			return state
		case ActionTypes.MONEY_FETCH_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){
		 		return Object.assign({}, state, {status:1,list:action.response.data.list})
	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.MONEY_FETCH_FAILURE:
	 		return Object.assign({}, state,{status:-1})




	 	case ActionTypes.MONEY_DEL_REQUEST:
			return state
		case ActionTypes.MONEY_DEL_SUCCESS:

			if(action.response && action.response.errNo==0){

				if(action.response.requestParams && action.response.requestParams.aids){
					// debugger
					let aid=action.response.requestParams.aids;
					let results=state.list;
					var new_results=[];
					results.forEach(function(result){
						if(result.aid!=aid){
							new_results.push(result)
						}
					})
				}
		 		return Object.assign({}, state,{status:1,list:new_results,errNo:0})
	 		}else{

	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.MONEY_DEL_FAILURE:
	 		return Object.assign({}, state,{status:-1})

	 	case ActionTypes.MONEY_MODIFY_REQUEST:
			return state
		case ActionTypes.MONEY_MODIFY_SUCCESS:

			if(action.response && action.response.errNo==0){
				if(action.response.requestParams && action.response.requestParams.aid){
					// debugger
					let aid=action.response.requestParams.aid;
					let acount_name=action.response.requestParams.acount_name;
					let rate=action.response.requestParams.rate;
					let max_limit=action.response.requestParams.max_limit;
					// debugger
					let results=state.list;
					var new_results=[];
					results.forEach(function(result){
						if(result.aid!=aid){
							new_results.push(result)
						}else{
							var new_result=result;
							new_result.acount_name=acount_name;
							new_result.rate=rate;
							new_result.max_limit=max_limit;
							new_results.push(new_result);

						}
					})
					
					return Object.assign({}, state,{status:1,list:new_results,isCloseTip:true,errNo:0})
				}
		 		
	 		}else{
	 			return Object.assign({}, state, {status:-1,isCloseTip:false,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.MONEY_MODIFY_FAILURE:
	 		return Object.assign({}, state,{status:-1})

	 	
	 	default:
	 		return state
	}
	
}



// INSERT INTO chain_employee_manage (reg_code,chain_name,chain_address,dean_name,dean_phone,update_time,create_time) VALUES ('887sas','连锁测试分店2','北京市海淀区7省大院,'分店院长名字,'13388888888,'1472109712,'1472109712');


export default reducer_money_account