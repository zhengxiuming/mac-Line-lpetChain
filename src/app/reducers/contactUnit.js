import * as ActionTypes from '../actions/contactUnit'

const reducer_contact_unit = (state={status:0}, action) => {
	switch (action.type){
		case ActionTypes.CONTACTUNIT_LIST_REQUEST:
			return state
		case ActionTypes.CONTACTUNIT_LIST_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){
					// debugger
				let list=action.response.data.list;
				
		 		return Object.assign({}, state, {status:1,list:list,errNo:0})
	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.CONTACTUNIT_LIST_FAILURE:
	 		return Object.assign({}, state,{status:-1})



	 	case ActionTypes.CONTACTUNIT_ADD_REQUEST:
			return state
		case ActionTypes.CONTACTUNIT_ADD_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){

					// debugger
				// let list=action.response.data.list;



				let Id=action.response.data.id;
				let Name=action.response.requestParams.name;
				let PersonName=action.response.requestParams.personname;
				let Phone=action.response.requestParams.phone;
				let Discription=action.response.requestParams.discription;
				let is_customer=action.response.requestParams.is_customer;
				let is_dealer=action.response.requestParams.is_dealer;

				var new_list=state.list
				var item={
					Id:Id
					,Name:Name
					,PersonName:PersonName
					,Phone:Phone
					,Discription:Discription
					,is_customer:is_customer
					,is_dealer:is_dealer
				}
				new_list.push(item);
				
		 		return Object.assign({}, state, {status:1,isCloseTip:true,list:new_list,errNo:0})



	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.CONTACTUNIT_ADD_FAILURE:
	 		return Object.assign({}, state,{status:-1})

		case ActionTypes.CONTACTUNIT_MODIFY_REQUEST:
			return state
		case ActionTypes.CONTACTUNIT_MODIFY_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){

			


				let Id=action.response.requestParams.id;
				let Name=action.response.requestParams.name;
				let PersonName=action.response.requestParams.personname;
				let Phone=action.response.requestParams.phone;
				let Discription=action.response.requestParams.discription;
				let is_customer=action.response.requestParams.is_customer;
				let is_dealer=action.response.requestParams.is_dealer;

				
				var new_list=[];
				state.list.forEach(function(item){
					if(item.Id!=Id){
						new_list.push(item)
					}else{
						var new_item=item;
						new_item.Id=Id
						new_item.Name=Name
						new_item.PersonName=PersonName
						new_item.Phone=Phone
						new_item.Discription=Discription
						new_item.is_customer=is_customer
						new_item.is_dealer=is_dealer
						new_list.push(new_item);

					}
				})
				
		 		return Object.assign({}, state, {status:1,isCloseTip:true,list:new_list,errNo:0})



	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.CONTACTUNIT_MODIFY_FAILURE:
	 		return Object.assign({}, state,{status:-1})


		case ActionTypes.CONTACTUNIT_DEL_REQUEST:
			return state
		case ActionTypes.CONTACTUNIT_DEL_SUCCESS:

			// console.log(action);
			if(action.response && action.response.errNo==0){

			


				let ids=action.response.requestParams.ids;
				
				
				var new_list=[];
				state.list.forEach(function(item){
					if(item.Id!=ids){
						new_list.push(item)
					}
				})
				
		 		return Object.assign({}, state, {status:1,isCloseTip:true,list:new_list,errNo:0})



	 		}else{
	 			return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
	 		}
		case ActionTypes.CONTACTUNIT_DEL_SUCCESS:
	 		return Object.assign({}, state,{status:-1})


	 	default:
	 		return state
	}
	
}



export default reducer_contact_unit