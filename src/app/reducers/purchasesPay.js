/**
 * Created by zhengxiuming on 16/10/8.
 */

import * as ActionTypes from '../actions/purchasesPay';

const reducer_purchasesPay=(state={status:0},action)=>{
    switch(action.type){
        case ActionTypes.PURCHASESPAY_FETCH_REQUEST:
            return state;
        case ActionTypes.PURCHASESPAY_FETCH_SUCCESS:
            if(action.response && action.response.errNo==0){
                console.log(action.response.data.list)
                return Object.assign({}, ...state, {status:1,
                    employList:action.response.data.list,
                    total_page_nums:action.response.data.total_page_nums,
                    current_page:action.response.data.current_page
                })
            }else{
                return Object.assign({}, ...state, {status:-1,errNo:action.response.errNo})
            }
        case ActionTypes.PURCHASESPAY_START_TIME_CHANGED:
            return Object.assign({}, state,{start_time:action.start_time})

        case ActionTypes.PURCHASESPAY_END_TIME_CHANGED:
            return Object.assign({}, state,{end_time:action.end_time})

        default:
            return state
    }
}
export default reducer_purchasesPay;