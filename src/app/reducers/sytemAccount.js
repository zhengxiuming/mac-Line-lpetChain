/**
 * Created by zhengxiuming on 16/9/17.
 */

import * as ActionTypes from '../actions/systemAccount';

 const reducer_systemAccount=(state={status:0}, action)=>{
     switch (action.type){
         case ActionTypes.SYSTEM_FETCH_REQUEST:
             return state
         case ActionTypes.SYSTEM_FETCH_SUCCESS:
             if(action.response && action.response.errNo==0){
                 return Object.assign({}, state, {status:1,list:action.response.data.list})
             }else{
                 return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
             }
         case ActionTypes.SYSTEM_FETCH_FAILURE:
             return Object.assign({}, state,{status:-1})
         case ActionTypes.SYSTEM_ADD_REQUEST:
             return state
         case ActionTypes.SYSTEM_ADD_SUCCESS:
             if(action.response && action.response.errNo==0){
                  //debugger
                 let uid=action.response.data.uid;
                 let name=action.response.requestParams.name;

                 var new_list=state.list
                 var item={
                     uid:uid
                     ,name:name
                 }
                 new_list.push(item);
                 //debugger
                 return Object.assign({}, state, {status:1,list:new_list,isCloseTip:true,errNo:0})
             }else{
                 return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
             }
         case ActionTypes.SYSTEM_ADD_FAILURE:
             return Object.assign({}, state,{status:-1})
         case ActionTypes.SYSTEM_DEL_REQUEST:
             return state
         case ActionTypes.SYSTEM_DEL_SUCCESS:
             if(action.response && action.response.errNo==0){
                 if(action.response.requestParams && action.response.requestParams.uids){
                     // debugger
                     let uid=action.response.requestParams.uids;
                     let results=state.list;
                     var new_results=[];
                     results.forEach(function(result){
                         if(result.uid!=uid){
                             new_results.push(result)
                         }
                     })
                 }
                 return Object.assign({}, state,{status:1,list:new_results,errNo:0})
             }else{

                 return Object.assign({}, state, {status:-1,errNo:action.response.errNo,errstr:action.response.errstr})
             }

         case ActionTypes.SYSTEM_DEL_FAILURE:
             return Object.assign({}, state,{status:-1})


         case ActionTypes.EMPLOYEE_SEARCH_REQUEST:
             return state;
         case ActionTypes.EMPLOYEE_SEARCH_SUCCESS:
             if (action.response && action.response.errNo == 0) {
                  //console.log(action.response.data.id)
                 //debugger
                 return Object.assign({}, state, {
                     status: 1,
                     empolyeelist: action.response.data.list
                 })
                 //console.log(empolyeelist);
                 //debugger
             } else {
                 //debugger
                 return Object.assign({}, state, {status: -1, errNo: action.response.errNo})
             }
         case ActionTypes.EMPLOYEE_SEARCH_FAILURE:
             return Object.assign({}, state, {status: -1})
             //debugger

         case ActionTypes.FETCH_SYSTEMNAVLIST_REQUEST:
             return state;
         case ActionTypes.FETCH_SYSTEMNAVLIST_SUCCESS:
             if (action.response && action.response.errNo == 0) {
                 // console.log(action.response.data.list)
                 //debugger
                 return Object.assign({}, state, {
                     status: 1,
                     navlist: action.response.data.navlist
                 })
                 //debugger
             } else {
                 //debugger
                 return Object.assign({}, state, {status: -1, errNo: action.response.errNo})
             }
         case ActionTypes.FETCH_SYSTEMNAVLIST_FAILURE:
             return Object.assign({}, state, {status: -1})


         case ActionTypes.SYSTEM_BIND_REQUEST:
             return state;
         case ActionTypes.SYSTEM_BIND_SUCCESS:
             if (action.response && action.response.errNo == 0) {
                  var uid=action.response.requestParams.uid;
                  //console.log(state.list)
                 //debugger
                 return Object.assign({}, state, {status: 1,systemUid:uid});
                 //debugger
             } else {
                 //debugger
                 return Object.assign({}, state, {status: -1, errNo: action.response.errNo})
             }
         case ActionTypes.SYSTEM_BIND_FAILURE:
             return Object.assign({}, state, {status: -1})
         default :
             return state;
     }
}

export default reducer_systemAccount;
