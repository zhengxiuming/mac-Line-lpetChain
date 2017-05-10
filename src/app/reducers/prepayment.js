
import * as ActionTypes from '../actions/prepaymentManage';
import * as tpTypes from '../components/timePeriod'


let initialState={
    // company_data:company_data,
    // search_company_data:search_company_data,
    // op_data:op_data,
    // moneyAccounts:moneyAccounts,
     
      //list:list
      // statistics:statistics,
      // start_time:state.prepaymentManage.start_time
      // ,end_time:state.prepaymentManage.end_time
      // ,period_type:tpTypes.TIME_PERIOD_WEEK
      status:0
      ,errNo:0
      ,errstr:"success"
      ,list:[]
      ,current_page:0
      ,total_count:0
      ,total_page_nums:0
      ,datestart:0
      ,dateend:0
      ,prepaymentbalance:0

}

const reducer_prepayment_manage=(state={status:0},action)=>{
    switch(action.type){
        case ActionTypes.PREPAYMENT_LIST_REQUEST:
            return state;
        case ActionTypes.PREPAYMENT_LIST_SUCCESS:
            if(action.response && action.response.errNo==0){
                console.log(action.response.data.list)
                return Object.assign({}, ...state, {status:1,
                    list:action.response.data.list,
                    total_page_nums:action.response.data.total_page_nums,
                    current_page:action.response.data.current_page,
                    total_count:action.response.data.total_count,
                    prepaymentbalance:action.response.data.prepaymentbalance,
                   
                })
            }else{
                return Object.assign({}, ...state, {status:-1,errNo:action.response.errNo})
            }
        case ActionTypes.PREPAYMENT_DATESTART_CHANGED:
        // debugger;
            return Object.assign({}, state,{datestart:action.datestart})

        case ActionTypes.PREPAYMENT_DATEEND_CHANGED:

            return Object.assign({}, state,{dateend:action.dateend})
       
        default:
            return state
    }
}
export default reducer_prepayment_manage;