/**
 * Created by zhengxiuming on 16/9/26.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"

export const TRANSFERCLEAR_FETCH_REQUEST='TRANSFERCLEAR_FETCH_REQUEST'
export const TRANSFERCLEAR_FETCH_SUCCESS='TRANSFERCLEAR_FETCH_SUCCESS'
export const TRANSFERCLEAR_FETCH_FAILURE='TRANSFERCLEAR_FETCH_FAILURE'

export function actionCreator_fetch_transferClear(duid,acount_name,rate,max_limit){
    return {
        [FETCH_SYMBOL]:{
            types:[TRANSFERCLEAR_FETCH_REQUEST,TRANSFERCLEAR_FETCH_SUCCESS,TRANSFERCLEAR_FETCH_FAILURE],
            endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}

export const TRANSFERCLEAR_START_TIME_CHANGED='TRANSFERCLEAR_START_TIME_CHANGED'

export function actionCreator_start_time_change_transferClear(start_time){
    return {
        type:TRANSFERCLEAR_START_TIME_CHANGED,
        start_time
    }
}

export const TRANSFERCLEAR_END_TIME_CHANGED='TRANSFERCLEAR_END_TIME_CHANGED'

export function actionCreator_end_time_change_transferClear(end_time){
    return {
        type:TRANSFERCLEAR_END_TIME_CHANGED,
        end_time
    }
}

