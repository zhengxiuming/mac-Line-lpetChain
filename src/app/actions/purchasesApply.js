import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"


export const PURCHASES_LIST_REQUEST='PURCHASES_LIST_REQUEST'
export const PURCHASES_LIST_SUCCESS='PURCHASES_LIST_SUCCESS'
export const PURCHASES_LIST_FAILURE='PURCHASES_LIST_FAILURE'

export function actionCreator_fetch_purchasesapply(duid,acount_name,rate,max_limit){
	return {
		[FETCH_SYMBOL]:{
			types:[MONEY_ADD_REQUEST,MONEY_ADD_SUCCESS,MONEY_ADD_FAILURE],
			endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
			// schema:hospialSchema
		}
	}
}


export const PURCHASES_START_TIME_CHANGED='PURCHASES_START_TIME_CHANGED'

export function actionCreator_start_time_change_purchasesapply(start_time){
	return {
		type:PURCHASES_START_TIME_CHANGED,
		start_time
	}
}

export const PURCHASES_END_TIME_CHANGED='PURCHASES_END_TIME_CHANGED'

export function actionCreator_end_time_change_purchasesapply(end_time){
	return {
		type:PURCHASES_END_TIME_CHANGED,
		end_time
	}
}

