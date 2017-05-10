/**
 * Created by zhengxiuming on 16/9/29.
 */
import {
    FETCH_SYMBOL
} from "../middlewares/settingMiddleware"

export const STOCKCHECK_FETCH_REQUEST = 'STOCKCHECK_FETCH_REQUEST'
export const STOCKCHECK_FETCH_SUCCESS = 'STOCKCHECK_FETCH_SUCCESS'
export const STOCKCHECK_FETCH_FAILURE = 'STOCKCHECK_FETCH_FAILURE'

export function actionCreator_fetch_stockCheck(duid, acount_name, rate, max_limit) {
    return {
        [FETCH_SYMBOL]: {
            types: [STOCKCHECK_FETCH_REQUEST, STOCKCHECK_FETCH_SUCCESS, STOCKCHECK_FETCH_FAILURE],
            endpoint: `sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
                // schema:hospialSchema
        }
    }
}

export const STOCKCHECK_START_TIME_CHANGED = 'STOCKCHECK_START_TIME_CHANGED'

export function actionCreator_start_time_change_stockCheck(start_time) {
    return {
        type: STOCKCHECK_START_TIME_CHANGED,
        start_time
    }
}

export const STOCKCHECK_END_TIME_CHANGED = 'STOCKCHECK_END_TIME_CHANGED'

export function actionCreator_end_time_change_stockCheck(end_time) {
    return {
        type: STOCKCHECK_END_TIME_CHANGED,
        end_time
    }
}