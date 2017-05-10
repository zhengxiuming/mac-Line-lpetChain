/**
 * Created by zhengxiuming on 16/10/9.
 */
import {
    FETCH_SYMBOL
} from "../middlewares/settingMiddleware"

export const STOCKSEARCH_FETCH_REQUEST = 'STOCKSEARCH_FETCH_REQUEST'
export const STOCKSEARCH_FETCH_SUCCESS = 'STOCKSEARCH_FETCH_SUCCESS'
export const STOCKSEARCH_FETCH_FAILURE = 'STOCKSEARCH_FETCH_FAILURE'

export function actionCreator_fetch_stockSearch(duid, acount_name, rate, max_limit) {
    return {
        [FETCH_SYMBOL]: {
            types: [STOCKSEARCH_FETCH_REQUEST, STOCKSEARCH_FETCH_SUCCESS, STOCKSEARCH_FETCH_FAILURE],
            endpoint: `sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}