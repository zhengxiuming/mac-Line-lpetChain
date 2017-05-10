/**
 * Created by zhengxiuming on 16/10/8.
 */
/**
 * Created by zhengxiuming on 16/9/23.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"

export const PURCHASESPAY_FETCH_REQUEST='PURCHASESPAY_FETCH_REQUEST';
export const PURCHASESPAY_FETCH_SUCCESS='PURCHASESPAY_FETCH_SUCCESS';
export const PURCHASESPAY_FETCH_FAILURE='PURCHASESPAY_FETCH_FAILURE';

export function actionCreator_fetch_purchasesPay(duid,acount_name,rate,max_limit){
    return {
        [FETCH_SYMBOL]:{
            types:[PURCHASESPAY_FETCH_REQUEST,PURCHASESPAY_FETCH_SUCCESS,PURCHASESPAY_FETCH_FAILURE],
            endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}

export const PURCHASESPAY_START_TIME_CHANGED='PURCHASESPAY_START_TIME_CHANGED'

export function actionCreator_start_time_change_purchasesPay(start_time){
    return {
        type:PURCHASESPAY_START_TIME_CHANGED,
        start_time
    }
}

export const PURCHASESPAY_END_TIME_CHANGED='PURCHASESPAY_END_TIME_CHANGED'

export function actionCreator_end_time_change_purchasesPay(end_time){
    return {
        type:PURCHASESPAY_END_TIME_CHANGED,
        end_time
    }
}

