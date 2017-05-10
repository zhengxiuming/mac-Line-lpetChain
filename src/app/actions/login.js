import {FETCH_SYMBOL,hospialSchema} from "../middlewares/settingMiddleware"
var md5 =require("js-md5")


export const LOGIN_FETCH_REQUEST='LOGIN_FETCH_REQUEST'
export const LOGIN_FETCH_SUCCESS='LOGIN_FETCH_SUCCESS'
export const LOGIN_FETCH_FAILURE='LOGIN_FETCH_FAILURE'

 
	
export function login_submit(user_name,passwd){
	// chain_scope.enterprise_id

	// post_params:post_data

	let post_data={
		user_name:user_name
		,passwd:md5(passwd)
		,enterprise_id:chain_scope.enterprise_id
	}
	return {
		[FETCH_SYMBOL]:{
			types:[LOGIN_FETCH_REQUEST,LOGIN_FETCH_SUCCESS,LOGIN_FETCH_FAILURE],
			endpoint:`sysset/v1/login`
			,post_params:post_data
		}
	}
}



export const LOGOUT_FETCH_REQUEST='LOGOUT_FETCH_REQUEST'
export const LOGOUT_FETCH_SUCCESS='LOGOUT_FETCH_SUCCESS'
export const LOGOUT_FETCH_FAILURE='LOGOUT_FETCH_FAILURE'


export function logout_submit(){
	
	let post_data={
	}
	return {
		[FETCH_SYMBOL]:{
			types:[LOGOUT_FETCH_REQUEST,LOGOUT_FETCH_SUCCESS,LOGOUT_FETCH_FAILURE],
			endpoint:`sysset/v1/logout`
			,post_params:post_data
		}
	}
}


// http://lpetchain.goudaifu.com/sysset/v1/logout


