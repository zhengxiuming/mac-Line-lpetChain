/**
 * Created by zhengxiuming on 2016/10/13.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"

export const OTHERINCOME_FETCH_REQUEST='OTHERINCOME_FETCH_REQUEST';
export const OTHERINCOME_FETCH_SUCCESS='OTHERINCOME_FETCH_SUCCESS';
export const OTHERINCOME_FETCH_FAILURE='OTHERINCOME_FETCH_FAILURE';

export function actionCreator_fetch_otherIncome(duid,acount_name,rate,max_limit){
    return {
        [FETCH_SYMBOL]:{
            types:[OTHERINCOME_FETCH_REQUEST,OTHERINCOME_FETCH_SUCCESS,OTHERINCOME_FETCH_FAILURE],
            endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
            // schema:hospialSchema
        }
    }
}

export const OTHERINCOME_START_TIME_CHANGED='PURCHSASESSTOCK_START_TIME_CHANGED'

export function actionCreator_start_time_change_otherIncome(start_time){
    return {
        type:OTHERINCOME_START_TIME_CHANGED,
        start_time
    }
}

export const OTHERINCOME_END_TIME_CHANGED='PURCHSASESSTOCK_END_TIME_CHANGED'

export function actionCreator_end_time_change_otherIncome(end_time){
    return {
        type:OTHERINCOME_END_TIME_CHANGED,
        end_time
    }
}

