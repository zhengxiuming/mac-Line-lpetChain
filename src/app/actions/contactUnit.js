import {FETCH_SYMBOL} from "../middlewares/settingMiddleware"


export const CONTACTUNIT_LIST_REQUEST='CONTACTUNIT_LIST_REQUEST'
export const CONTACTUNIT_LIST_SUCCESS='CONTACTUNIT_LIST_SUCCESS'
export const CONTACTUNIT_LIST_FAILURE='CONTACTUNIT_LIST_FAILURE'
	
export function fetch_contact_units(duid,queryinfo){


	return {
		[FETCH_SYMBOL]:{
			types:[CONTACTUNIT_LIST_REQUEST,CONTACTUNIT_LIST_SUCCESS,CONTACTUNIT_LIST_FAILURE],
			endpoint:`sysset/v1/companylist?duid=${duid}&queryinfo=${queryinfo}`
			// schema:hospialSchema
		}
	}
}



export const CONTACTUNIT_ADD_REQUEST='CONTACTUNIT_ADD_REQUEST'
export const CONTACTUNIT_ADD_SUCCESS='CONTACTUNIT_ADD_SUCCESS'
export const CONTACTUNIT_ADD_FAILURE='CONTACTUNIT_ADD_FAILURE'
	
export function add_contact_unit(duid,name,personname,phone,discription,is_customer,is_dealer){

	return {
		[FETCH_SYMBOL]:{
			types:[CONTACTUNIT_ADD_REQUEST,CONTACTUNIT_ADD_SUCCESS,CONTACTUNIT_ADD_FAILURE],
			endpoint:`sysset/v1/addcompany?duid=${duid}&name=${name}&personname=${personname}&phone=${phone}&discription=${discription}&is_customer=${is_customer}&is_dealer=${is_dealer}`
			// schema:hospialSchema
		}
	}
}


export const CONTACTUNIT_MODIFY_REQUEST='CONTACTUNIT_MODIFY_REQUEST'
export const CONTACTUNIT_MODIFY_SUCCESS='CONTACTUNIT_MODIFY_SUCCESS'
export const CONTACTUNIT_MODIFY_FAILURE='CONTACTUNIT_MODIFY_FAILURE'

	
export function modify_contact_unit(duid,id,name,personname,phone,discription,is_customer,is_dealer){

	return {
		[FETCH_SYMBOL]:{
			types:[CONTACTUNIT_MODIFY_REQUEST,CONTACTUNIT_MODIFY_SUCCESS,CONTACTUNIT_MODIFY_FAILURE],
			endpoint:`sysset/v1/editcompany?duid=${duid}&id=${id}&name=${name}&personname=${personname}&phone=${phone}&discription=${discription}&is_customer=${is_customer}&is_dealer=${is_dealer}`
			// schema:hospialSchema
		}
	}
}


export const CONTACTUNIT_DEL_REQUEST='CONTACTUNIT_DEL_REQUEST'
export const CONTACTUNIT_DEL_SUCCESS='CONTACTUNIT_DEL_SUCCESS'
export const CONTACTUNIT_DEL_FAILURE='CONTACTUNIT_DEL_FAILURE'

	
export function del_contact_unit(duid,ids){

	return {
		[FETCH_SYMBOL]:{
			types:[CONTACTUNIT_DEL_REQUEST,CONTACTUNIT_DEL_SUCCESS,CONTACTUNIT_DEL_FAILURE],
			endpoint:`sysset/v1/delcompany?duid=${duid}&ids=${ids}`
			// schema:hospialSchema
		}
	}
}






