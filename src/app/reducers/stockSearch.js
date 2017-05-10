
import * as ActionTypes from '../actions/stockSearch';

const reducer_stock_search = (state = {
    status: 0
}, action) => {
    switch (action.type) {
        case ActionTypes.STOCKSEARCH_FETCH_REQUEST:
            return state;
        case ActionTypes.STOCKSEARCH_FETCH_SUCCESS:
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
        default:
            return state
    }
}
export default reducer_stock_search;