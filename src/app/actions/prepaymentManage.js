import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"


export const PREPAYMENT_LIST_REQUEST='PREPAYMENT_LIST_REQUEST'
export const PREPAYMENT_LIST_SUCCESS='PREPAYMENT_LIST_SUCCESS'
export const PREPAYMENT_LIST_FAILURE='PREPAYMENT_LIST_FAILURE'
	
export function actionCreator_fetch_prepaymentList(duid,page_num,companyid,query,datestart,dateend){


	return {
		[FETCH_SYMBOL]:{
			types:[PREPAYMENT_LIST_REQUEST,PREPAYMENT_LIST_SUCCESS,PREPAYMENT_LIST_FAILURE],
			endpoint:`stockmanage/v1/stockdetaillist?duid=${duid}&page_num=${page_num}&companyid=${companyid}&query=${query}&datestart=${datestart}&dateend=${dateend}`
			// schema:hospialSchema
		}
	}
}



export const PREPAYMENT_ADD_REQUEST='PREPAYMENT_ADD_REQUEST'
export const PREPAYMENT_ADD_SUCCESS='PREPAYMENT_ADD_SUCCESS'
export const PREPAYMENT_ADD_FAILURE='PREPAYMENT_ADD_FAILURE'
	
export function add_prepayment(duid,post_data){


	return {
		[FETCH_SYMBOL]:{
			types:[PREPAYMENT_LIST_REQUEST,PREPAYMENT_LIST_SUCCESS,PREPAYMENT_LIST_FAILURE],
			endpoint:`/stockmanage/v1/stockcharge?duid=${duid}`,
			post_params:post_data
		}
	}
}

// http://lpetchain.goudaifu.com/stockmanage/v1/stockdetaillist?page_num=1&billquery=YF201609190063&companyquery='中爱'&datestart='20160918'&dateend='20160918'

export const PREPAYMENT_DATESTART_CHANGED='PREPAYMENT_DATESTART_CHANGED'

export function actionCreator_datestart_change_prepayment(datestart){
	// debugger
	return {
		type:PREPAYMENT_DATESTART_CHANGED,
		datestart
	}
}

export const PREPAYMENT_DATEEND_CHANGED='PREPAYMENT_DATEEND_CHANGED'

export function actionCreator_dateend_change_prepayment(dateend){
	return {
		type:PREPAYMENT_DATEEND_CHANGED,
		dateend
	}
}



