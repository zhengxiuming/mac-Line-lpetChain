/**
 * Created by zhengxiuming on 16/9/26.
 */

import * as ActionTypes from '../actions/stockCheck';

const reducer_stock_check = (state = {
    status: 0
}, action) => {
    switch (action.type) {
        case ActionTypes.STOCKCHECK_FETCH_REQUEST:
            return state;
        case ActionTypes.STOCKCHECK_FETCH_SUCCESS:
            if (action.response && action.response.errNo == 0) {
                console.log(action.response.data.list)
                return Object.assign({}, ...state, {
                    status: 1,
                    employList: action.response.data.list,
                    total_page_nums: action.response.data.total_page_nums,
                    current_page: action.response.data.current_page
                })
            } else {
                return Object.assign({}, ...state, {
                    status: -1,
                    errNo: action.response.errNo
                })
            }
        case ActionTypes.STOCKCHECK_START_TIME_CHANGED:
            return Object.assign({}, state, {
                start_time: action.start_time
            })

        case ActionTypes.STOCKCHECK_END_TIME_CHANGED:
            return Object.assign({}, state, {
                end_time: action.end_time
            })

        default:
            return state
    }
}
export default reducer_stock_check;