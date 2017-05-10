import {FETCH_SYMBOL,hospialSchema} from "../middlewares/settingMiddleware"


export const SETTING_FETCH_REQUEST='SETTING_FETCH_REQUEST'
export const SETTING_FETCH_SUCCESS='SETTING_FETCH_SUCCESS'
export const SETTING_FETCH_FAILURE='SETTING_FETCH_FAILURE'

 
	
export function actionCreator_fetchHospitals(duid){
	return {
		[FETCH_SYMBOL]:{
			types:[SETTING_FETCH_REQUEST,SETTING_FETCH_SUCCESS,SETTING_FETCH_FAILURE],
			endpoint:`chainmanage/v1/chainbranchlist?duid=${duid}`
			// schema:hospialSchema
		}
	}
}

export const SETTING_UNBIND_REQUEST='SETTING_UNBIND_REQUEST'
export const SETTING_UNBIND_SUCCESS='SETTING_UNBIND_SUCCESS'
export const SETTING_UNBIND_FAILURE='SETTING_UNBIND_FAILURE'


export function actionCreator_unbindHospitals(duid,bid){
	return {
		[FETCH_SYMBOL]:{
			types:[SETTING_UNBIND_REQUEST,SETTING_UNBIND_SUCCESS,SETTING_UNBIND_FAILURE],
			// schema:hospialSchema
			endpoint:`chainmanage/v1/delchainbranch?duid=${duid}&bid=${bid}`
		}
	}
}
export const SETTING_RENAME_REQUEST='SETTING_RENAME_REQUEST'
export const SETTING_RENAME_SUCCESS='SETTING_RENAME_SUCCESS'
export const SETTING_RENAME_FAILURE='SETTING_RENAME_FAILURE'


export function actionCreator_renameHospitals(duid,hid,chain_name){
	return {
		[FETCH_SYMBOL]:{
			types:[SETTING_RENAME_REQUEST,SETTING_RENAME_SUCCESS,SETTING_RENAME_FAILURE],
			// schema:hospialSchema
			endpoint:`chainmanage/v1/editchainhead?duid=${duid}&hid=${hid}&chain_name=${chain_name}`
		}
	}
}


