/**
 * Created by xiuming on 2016/9/10 0010.
 */
import {FETCH_SYMBOL} from "../middlewares/settingMiddleware";

export const EMPLOYEE_FETCH_REQUEST = 'EMPLOYEE_FETCH_REQUEST';
export const EMPLOYEE_FETCH_SUCCESS = 'EMPLOYEE_FETCH_SUCCESS';
export const EMPLOYEE_FETCH_FAILURE = 'EMPLOYEE_FETCH_FAILURE';

export function fetchEmployeeList(duid,page_num,queryinfo){
    return {
        [FETCH_SYMBOL] : {
            types : [EMPLOYEE_FETCH_REQUEST, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_FETCH_FAILURE],
            endpoint : `sysset/v1/employeelist?DUID=${duid}&code=&queryinfo=${queryinfo}&page_num=${page_num}`
        }
    }
}
//添加员工
export const ADDEMPLOYEE_FETCH_REQUEST = 'ADDEMPLOYEE_FETCH_REQUEST';
export const ADDEMPLOYEE_FETCH_SUCCESS = 'ADDEMPLOYEE_FETCH_SUCCESS';
export const ADDEMPLOYEE_FETCH_FAILURE = 'ADDEMPLOYEE_FETCH_FAILURE';

export function fetchAddEmployee(duid, name, phone, hspname, position,stockholder){
    return {
        [FETCH_SYMBOL] : {
            types : [ADDEMPLOYEE_FETCH_REQUEST, ADDEMPLOYEE_FETCH_SUCCESS, ADDEMPLOYEE_FETCH_FAILURE],
            endpoint : `sysset/v1/addemployee?DUID=${duid}
            &name=${name}&phone=${phone}&avatar=http://goudaifupic.oss-cn-beijing.aliyuncs.com/0004b0edb02dfef9e0fc6287f58cea11.jpg&type=1
            &code=886sas&hspname=${hspname}&position=${position}&stockholder=${stockholder}`
        }
    }
}

export const DELEMPLOYEE_FETCH_REQUEST = 'DELEMPLOYEE_FETCH_REQUEST';
export const DELEMPLOYEE_FETCH_SUCCESS = 'DELEMPLOYEE_FETCH_SUCCESS';
export const DELEMPLOYEE_FETCH_FAILURE = 'DELEMPLOYEE_FETCH_FAILURE';

export function fetchDelEmployee(duid,eids){
    return {
        [FETCH_SYMBOL] : {
            types : [DELEMPLOYEE_FETCH_REQUEST, DELEMPLOYEE_FETCH_SUCCESS, DELEMPLOYEE_FETCH_FAILURE],
            endpoint : `sysset/v1/delemployee?DUID=${duid}&eids=${eids}`
        }
    }
}

export const MODIFYEMPLOYEE_FETCH_REQUEST = 'MODIFYEMPLOYEE_FETCH_REQUEST';
export const MODIFYEMPLOYEE_FETCH_SUCCESS = 'MODIFYEMPLOYEE_FETCH_SUCCESS';
export const MODIFYEMPLOYEE_FETCH_FAILURE = 'MODIFYEMPLOYEE_FETCH_FAILURE';

export function fetchModifyEmpolyee(duid, eid,name, phone, hspname, position,stockholder){
    return {
        [FETCH_SYMBOL]:{
            types : [MODIFYEMPLOYEE_FETCH_REQUEST, MODIFYEMPLOYEE_FETCH_SUCCESS, MODIFYEMPLOYEE_FETCH_FAILURE],
            endpoint : `sysset/v1/editemployee?DUID=${duid}&eid=${eid}&name=${name}&phone=${phone}&avatar=http://goudaifupic.oss-cn-beijing.aliyuncs.com/0004b0edb02dfef9e0fc6287f58cea11.jpg&type=1&code=886sas&hspname=${hspname}&position=${position}&stockholder=${stockholder}`
        }
    }
}
