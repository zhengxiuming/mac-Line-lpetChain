/**
 * Created by zhengxiuming on 16/9/27.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"

export const STOCKTRANSFER_FETCH_REQUEST='STOCKTRANSFER_FETCH_REQUEST'
export const STOCKTRANSFER_FETCH_SUCCESS='STOCKTRANSFER_FETCH_SUCCESS'
export const STOCKTRANSFER_FETCH_FAILURE='STOCKTRANSFER_FETCH_FAILURE'

export function actionCreator_fetch_stockTransfer(duid,acount_name,rate,max_limit){
    return {
        [FETCH_SYMBOL]:{
            types:[STOCKTRANSFER_FETCH_REQUEST,STOCKTRANSFER_FETCH_SUCCESS,STOCKTRANSFER_FETCH_FAILURE],
            endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}

export const STOCKTRANSFER_START_TIME_CHANGED='STOCKTRANSFER_START_TIME_CHANGED'

export function actionCreator_start_time_change_stockTransfer(start_time){
    return {
        type:STOCKTRANSFER_START_TIME_CHANGED,
        start_time
    }
}

export const STOCKTRANSFER_END_TIME_CHANGED='STOCKTRANSFER_END_TIME_CHANGED'

export function actionCreator_end_time_change_stockTransfer(end_time){
    return {
        type:STOCKTRANSFER_END_TIME_CHANGED,
        end_time
    }
}

