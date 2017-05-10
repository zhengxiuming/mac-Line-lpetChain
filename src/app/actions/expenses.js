// claude import {FETCH_SYMBOL,hospialSchema} from "../middlewares/settingMiddleware"


export const EXPENSES_FETCH_REQUEST='EXPENSES_FETCH_REQUEST'
export const EXPENSES_FETCH_SUCCESS='EXPENSES_FETCH_SUCCESS'
export const EXPENSES_FETCH_FAILURE='EXPENSES_FETCH_FAILURE'

 
	
export function actionCreator_fetchExpenses(duid){
	return {
		[FETCH_SYMBOL]:{
			types:[SETTING_FETCH_REQUEST,SETTING_FETCH_SUCCESS,SETTING_FETCH_FAILURE],
			endpoint:`chainmanage/v1/chainbranchlist?duid=${duid}`
			// schema:hospialSchema
		}
	}
}


export const PRODUCT_CATEGORY_FETCH_REQUEST='PRODUCT_CATEGORY_FETCH_REQUEST'
export const PRODUCT_CATEGORY_FETCH_SUCCESS='PRODUCT_CATEGORY_FETCH_SUCCESS'
export const PRODUCT_CATEGORY_FETCH_FAILURE='PRODUCT_CATEGORY_FETCH_FAILURE'
export const DROPDOWN_CATEGORY='DROPDOWN_CATEGORY'
export const UNDROPDOWN_CATEGORY='UNDROPDOWN_CATEGORY'

export function actionCreator_dropdown(){
	
}




