/**
 * Created by xiuming on 2016/9/10 0010.
 */
import * as ActionTypes from '../actions/employee';

const reducer_employee = (state = {status: 0}, action)=> {
    switch (action.type) {
        case ActionTypes.EMPLOYEE_FETCH_REQUEST:
            return state;
        case ActionTypes.EMPLOYEE_FETCH_SUCCESS:
            if (action.response && action.response.errNo == 0) {
                // console.log(action.response.data.list)
                //debugger
                var totalCount=action.response.data.total_count;
                var belonghsplist = action.response.data.belonghsplist;
                var position_list = action.response.data.positionlist;
                var hospitalList = [];
                var positionlistarray = [];

                for (var i = 0; i < belonghsplist.length; i++) {
                    hospitalList.push(belonghsplist[i].name)
                }
                for (var i = 0; i < position_list.length; i++) {
                    positionlistarray.push(position_list[i].position)
                }
                //debugger
                return Object.assign({}, state, {
                    status: 1,
                    list: action.response.data.list,
                    belonghsplist: hospitalList,
                    positionlistarray: positionlistarray,
                    totalCount:totalCount
                })
                //debugger
            } else {
                //debugger
                return Object.assign({}, state, {status: -1, errNo: action.response.errNo})
            }
        case ActionTypes.EMPLOYEE_FETCH_FAILURE:
            return Object.assign({}, state, {status: -1})

        case ActionTypes.ADDEMPLOYEE_FETCH_REQUEST:
            return state;
        case ActionTypes.ADDEMPLOYEE_FETCH_SUCCESS:
            if (action.response && action.response.errNo == 0) {
                //debugger
                let eid = action.response.data.eid;
                let name = action.response.requestParams.name;
                let phone = action.response.requestParams.phone;
                let hspname = action.response.requestParams.hspname;
                let position = action.response.requestParams.position;
                let stockholder = action.response.requestParams.stockholder;
                //debugger
                var new_list = state.list
                var item = {
                    eid: eid
                    , name: name
                    , phone: phone
                    , h_name: hspname
                    , position: position
                    , is_stockholder: stockholder
                }
                new_list.push(item);
                //debugger
                return Object.assign({}, state, {status: 1, list: new_list, isCloseTip: true, errNo: 0})
            } else {
                return Object.assign({}, state, {
                    status: -1,
                    errNo: action.response.errNo,
                    errstr: action.response.errstr
                })
            }
        case ActionTypes.ADDEMPLOYEE_FETCH_FAILURE:
            return Object.assign({}, state, {status: -1});


        case ActionTypes.DELEMPLOYEE_FETCH_REQUEST:
            return state
        case ActionTypes.DELEMPLOYEE_FETCH_SUCCESS:

            if (action.response && action.response.errNo == 0) {

                if (action.response.requestParams && action.response.requestParams.eids) {
                    // debugger
                    let eid = action.response.requestParams.eids;
                    let results = state.list;
                    var new_results = [];
                    results.forEach(function (result) {
                        if (result.eid != eid) {
                            new_results.push(result)
                        }
                    })
                }
                return Object.assign({}, state, {status: 1, list: new_results, errNo: 0})
            } else {

                return Object.assign({}, state, {
                    status: -1,
                    errNo: action.response.errNo,
                    errstr: action.response.errstr
                })
            }
        case ActionTypes.DELEMPLOYEE_FETCH_FAILURE:
            return Object.assign({}, state, {status: -1})


        case ActionTypes.MODIFYEMPLOYEE_FETCH_REQUEST:
            return state
        case ActionTypes.MODIFYEMPLOYEE_FETCH_SUCCESS:

            if (action.response && action.response.errNo == 0) {
                if (action.response.requestParams && action.response.requestParams.eid) {
                    // debugger
                    let eid = action.response.requestParams.eid;
                    let name = action.response.requestParams.name;
                    let phone = action.response.requestParams.phone;
                    let hspname = action.response.requestParams.hspname;
                    let position = action.response.requestParams.position;
                    let stockholder = action.response.requestParams.stockholder;
                    // debugger
                    let results = state.list;
                    var new_results = [];
                    results.forEach(function (result) {
                        if (result.eid != eid) {
                            new_results.push(result)
                        } else {
                            var new_result = result;
                            new_result.name = name;
                            new_result.phone = phone;
                            new_result.h_name = hspname;
                            new_result.position = position;
                            new_result.is_stockholder = stockholder;
                            new_results.push(new_result);
                        }
                    })

                    return Object.assign({}, state, {status: 1, list: new_results, isCloseTip: true, errNo: 0})
                }

            } else {
                return Object.assign({}, state, {
                    status: -1,
                    isCloseTip: false,
                    errNo: action.response.errNo,
                    errstr: action.response.errstr
                })
            }
        case ActionTypes.MODIFYEMPLOYEE_FETCH_FAILURE:
            return Object.assign({}, state, {status: -1})

        default:
            return state
    }
}
export default reducer_employee;