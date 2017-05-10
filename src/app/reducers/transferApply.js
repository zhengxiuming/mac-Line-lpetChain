/**
 * Created by zhengxiuming on 16/9/23.
 */

import * as ActionTypes from '../actions/transferApply';

const reducer_transfer_apply=(state={status:0},action)=>{
    switch(action.type){
        case ActionTypes.TRANSFER_FETCH_REQUEST:
            return state;
        case ActionTypes.TRANSFER_FETCH_SUCCESS:
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
        case ActionTypes.TRANSFER_START_TIME_CHANGED:
            return Object.assign({}, state,{start_time:action.start_time})

        case ActionTypes.TRANSFER_END_TIME_CHANGED:
            return Object.assign({}, state,{end_time:action.end_time})

        default:
            return state
    }
}
export default reducer_transfer_apply;