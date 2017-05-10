/**
 * Created by zhengxiuming on 2016/10/12.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"

export const REVENUEMANAGE_FETCH_REQUEST='REVENUEMANAGE_FETCH_REQUEST';
export const REVENUEMANAGE_FETCH_SUCCESS='REVENUEMANAGE_FETCH_SUCCESS';
export const REVENUEMANAGE_FETCH_FAILURE='REVENUEMANAGE_FETCH_FAILURE';

export function actionCreator_fetch_revenueManage(duid,acount_name,rate,max_limit){
    return {
        [FETCH_SYMBOL]:{
            types:[REVENUEMANAGE_FETCH_REQUEST,REVENUEMANAGE_FETCH_SUCCESS,REVENUEMANAGE_FETCH_FAILURE],
            endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}

export const REVENUEMANAGE_START_TIME_CHANGED='PURCHSASESSTOCK_START_TIME_CHANGED'

export function actionCreator_start_time_change_revenueManage(start_time){
    return {
        type:REVENUEMANAGE_START_TIME_CHANGED,
        start_time
    }
}

export const REVENUEMANAGE_END_TIME_CHANGED='PURCHSASESSTOCK_END_TIME_CHANGED'

export function actionCreator_end_time_change_revenueManage(end_time){
    return {
        type:REVENUEMANAGE_END_TIME_CHANGED,
        end_time
    }
}

