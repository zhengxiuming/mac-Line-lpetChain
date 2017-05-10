/**
 * Created by zhengxiuming on 16/9/23.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"

export const TRANSFER_FETCH_REQUEST='TRANSFER_FETCH_REQUEST'
export const TRANSFER_FETCH_SUCCESS='TRANSFER_FETCH_SUCCESS'
export const TRANSFER_FETCH_FAILURE='TRANSFER_FETCH_FAILURE'

export function actionCreator_fetch_transferapply(duid,acount_name,rate,max_limit){
    return {
        [FETCH_SYMBOL]:{
            types:[TRANSFER_FETCH_REQUEST,TRANSFER_FETCH_SUCCESS,TRANSFER_FETCH_FAILURE],
            endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}

export const TRANSFER_START_TIME_CHANGED='TRANSFER_START_TIME_CHANGED'

export function actionCreator_start_time_change_transferapply(start_time){
    return {
        type:TRANSFER_START_TIME_CHANGED,
        start_time
    }
}

export const TRANSFER_END_TIME_CHANGED='TRANSFER_END_TIME_CHANGED'

export function actionCreator_end_time_change_transferapply(end_time){
    return {
        type:TRANSFER_END_TIME_CHANGED,
        end_time
    }
}

