/**
 * Created by zhengxiuming on 2016/10/10.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"

export const PURCHSASESSTOCK_FETCH_REQUEST='PURCHSASESSTOCK_FETCH_REQUEST';
export const PURCHSASESSTOCK_FETCH_SUCCESS='PURCHSASESSTOCK_FETCH_SUCCESS';
export const PURCHSASESSTOCK_FETCH_FAILURE='PURCHSASESSTOCK_FETCH_FAILURE';

export function actionCreator_fetch_purchasesStock(duid,acount_name,rate,max_limit){
    return {
        [FETCH_SYMBOL]:{
            types:[PURCHSASESSTOCK_FETCH_REQUEST,PURCHSASESSTOCK_FETCH_SUCCESS,PURCHSASESSTOCK_FETCH_FAILURE],
            endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}

export const PURCHSASESSTOCK_START_TIME_CHANGED='PURCHSASESSTOCK_START_TIME_CHANGED'

export function actionCreator_start_time_change_purchasesStock(start_time){
    return {
        type:PURCHSASESSTOCK_START_TIME_CHANGED,
        start_time
    }
}

export const PURCHSASESSTOCK_END_TIME_CHANGED='PURCHSASESSTOCK_END_TIME_CHANGED'

export function actionCreator_end_time_change_purchasesStock(end_time){
    return {
        type:PURCHSASESSTOCK_END_TIME_CHANGED,
        end_time
    }
}

