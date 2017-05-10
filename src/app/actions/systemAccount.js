/**
 * Created by zhengxiuming on 16/9/17.
 */

import {FETCH_SYMBOL} from '../middlewares/settingMiddleware';


export const SYSTEM_FETCH_REQUEST='SYSTEM_FETCH_REQUEST'
export const SYSTEM_FETCH_SUCCESS='SYSTEM_FETCH_SUCCESS'
export const SYSTEM_FETCH_FAILURE='SYSTEM_FETCH_FAILURE'

export const SYSTEM_ADD_REQUEST='SYSTEM_ADD_REQUEST'
export const SYSTEM_ADD_SUCCESS='SYSTEM_ADD_SUCCESS'
export const SYSTEM_ADD_FAILURE='SYSTEM_ADD_FAILURE'

export const SYSTEM_DEL_REQUEST='SYSTEM_DEL_REQUEST'
export const SYSTEM_DEL_SUCCESS='SYSTEM_DEL_SUCCESS'
export const SYSTEM_DEL_FAILURE='SYSTEM_DEL_FAILURE'

export const SYSTEM_MODIFY_REQUEST='SYSTEM_MODIFY_REQUEST'
export const SYSTEM_MODIFY_SUCCESS='SYSTEM_MODIFY_SUCCESS'
export const SYSTEM_MODIFY_FAILURE='SYSTEM_MODIFY_FAILURE'

export const SYSTEM_BIND_REQUEST='SYSTEM_BIND_REQUEST'
export const SYSTEM_BIND_SUCCESS='SYSTEM_BIND_SUCCESS'
export const SYSTEM_BIND_FAILURE='SYSTEM_BIND_FAILURE'

//账号列表
export function systemAccount_fetch(duid,queryinfo){
    return {
        [FETCH_SYMBOL]:{
            types:[SYSTEM_FETCH_REQUEST,SYSTEM_FETCH_SUCCESS,SYSTEM_FETCH_FAILURE],
            endpoint:`sysset/v1/sysuserlist?duid=${duid}&queryinfo=${queryinfo}`
            // schema:hospialSchema
        }
    }
}
//添加账号
export function systemAccount_addAccount(duid,name,employee_eid) {
    return {
        [FETCH_SYMBOL]:{
            types:[SYSTEM_ADD_REQUEST,SYSTEM_ADD_SUCCESS,SYSTEM_ADD_FAILURE],
            endpoint:`sysset/v1/addsysuser?DUID=${duid}&name=${name}&employee_eid=${employee_eid}`
            // schema:hospialSchema
        }
    }
}
//删除账号
export function systemAccount_delAccount(duid,uid){
    return {
        [FETCH_SYMBOL]:{
            types:[SYSTEM_DEL_REQUEST,SYSTEM_DEL_SUCCESS,SYSTEM_DEL_FAILURE],
            endpoint:`sysset/v1/delsysuser?DUID=${duid}&uids=${uid}`
            // schema:hospialSchema
        }
    }
}

//系统用户权限设置
export function systemAccount_modifyAccount(duid,uid,type,info){
    return {
        [FETCH_SYMBOL]:{
            types:[SYSTEM_MODIFY_REQUEST,SYSTEM_MODIFY_SUCCESS,SYSTEM_MODIFY_FAILURE],
            endpoint:`sysset/v1/editsysuser?DUID=${duid}&uid=${uid}&type=${type}&info=${info}`
            // schema:hospialSchema
        }
    }
}

//系统用户绑定
/*
* uid 系统用户uid;
* info 雇员eid;
* */
export function systemAccount_bingAccount(duid,uid,info){
    return{
        [FETCH_SYMBOL]:{
            types:[SYSTEM_BIND_REQUEST,SYSTEM_BIND_SUCCESS,SYSTEM_BIND_FAILURE],
            endpoint:`sysset/v1/editsysuser?DUID=${duid}&uid=${uid}&type=4&info=${info}`
            // schema:hospialSchema
        }
    }
}

//雇员列表
export const EMPLOYEE_SEARCH_REQUEST = 'EMPLOYEE_SEARCH_REQUEST';
export const EMPLOYEE_SEARCH_SUCCESS = 'EMPLOYEE_SEARCH_SUCCESS';
export const EMPLOYEE_SEARCH_FAILURE = 'EMPLOYEE_SEARCH_FAILURE';

export function searchEmployeeList(duid,queryinfo){
    return {
        [FETCH_SYMBOL] : {
            types : [EMPLOYEE_SEARCH_REQUEST, EMPLOYEE_SEARCH_SUCCESS, EMPLOYEE_SEARCH_FAILURE],
            endpoint : `sysset/v1/employeelist?DUID=${duid}&code=&queryinfo=${queryinfo}&page_num=0`
        }
    }
}
//系统菜单列表
export const FETCH_SYSTEMNAVLIST_REQUEST="FETCH_SYSTEMLIST_REQUEST";
export const FETCH_SYSTEMNAVLIST_SUCCESS="FETCH_SYSTEMLIST_SUCCESS";
export const FETCH_SYSTEMNAVLIST_FAILURE="FETCH_SYSTEMLIST_FAILURE";

export function fetchSystemNavList(duid) {
    return{
        [FETCH_SYMBOL]:{
            types : [FETCH_SYSTEMNAVLIST_REQUEST, FETCH_SYSTEMNAVLIST_SUCCESS, FETCH_SYSTEMNAVLIST_FAILURE],
            endpoint : `sysset/v1/sysnavlist?DUID=${duid}`
        }
    }
}
