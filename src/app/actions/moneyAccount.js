import {FETCH_SYMBOL,hospialSchema} from "../middlewares/settingMiddleware"


export const MONEY_ADD_REQUEST='MONEY_ADD_REQUEST'
export const MONEY_ADD_SUCCESS='MONEY_ADD_SUCCESS'
export const MONEY_ADD_FAILURE='MONEY_ADD_FAILURE'
	
export function actionCreator_addMoneyAccount(duid,acount_name,rate,max_limit){
	return {
		[FETCH_SYMBOL]:{
			types:[MONEY_ADD_REQUEST,MONEY_ADD_SUCCESS,MONEY_ADD_FAILURE],
			endpoint:`sysset/v1/addmoneyacount?duid=${duid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
			// schema:hospialSchema
		}
	}
}


export const MONEY_FETCH_REQUEST='MONEY_FETCH_REQUEST'
export const MONEY_FETCH_SUCCESS='MONEY_FETCH_SUCCESS'
export const MONEY_FETCH_FAILURE='MONEY_FETCH_FAILURE'
	
export function fetchMoneyAccountList(duid){
	return {
		[FETCH_SYMBOL]:{
			types:[MONEY_FETCH_REQUEST,MONEY_FETCH_SUCCESS,MONEY_FETCH_FAILURE],
			endpoint:`sysset/v1/moneyacountlist?duid=${duid}`
			// schema:hospialSchema
		}
	}
}

export const MONEY_DEL_REQUEST='MONEY_DEL_REQUEST'
export const MONEY_DEL_SUCCESS='MONEY_DEL_SUCCESS'
export const MONEY_DEL_FAILURE='MONEY_DEL_FAILURE'

export function actionCreator_delMoneyAccountList(duid,aid){
	return {
		[FETCH_SYMBOL]:{
			types:[MONEY_DEL_REQUEST,MONEY_DEL_SUCCESS,MONEY_DEL_FAILURE],
			endpoint:`sysset/v1/delmoneyacount?duid=${duid}&aids=${aid}`
			// schema:hospialSchema
		}
	}
}


export const MONEY_MODIFY_REQUEST='MONEY_MODIFY_REQUEST'
export const MONEY_MODIFY_SUCCESS='MONEY_MODIFY_SUCCESS'
export const MONEY_MODIFY_FAILURE='MONEY_MODIFY_FAILURE'

export function actionCreator_modifyMoneyAccountList(duid,aid,acount_name,rate,max_limit){
	return {
		[FETCH_SYMBOL]:{
			types:[MONEY_MODIFY_REQUEST,MONEY_MODIFY_SUCCESS,MONEY_MODIFY_FAILURE],
			endpoint:`sysset/v1/editmoneyacount?duid=${duid}&aid=${aid}&acount_name=${acount_name}&rate=${rate}&max_limit=${max_limit}`
		}
	}
}
