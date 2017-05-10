import {
  combineReducers
} from 'redux'
import reducer_setting from './setting';
import reducer_employee from './employee';
import reducer_money_account from './moneyAccount';
import reducer_systemAccount from './sytemAccount';
import reducer_prepayment_manage from './prepayment'
import reducer_purchasest_apply from './purchasesApply'
import reducer_contact_unit from './contactUnit';
import reducer_transfer_apply from './transferApply';
import reducer_transfer_ettle from './transferettle';
import reducer_stock_transfer from './stockTransfer';
import reducer_stock_check from './stockCheck';
import reducer_purchasesPay from './purchasesPay';
import reducer_stock_search from './stockSearch';
import reducer_purchasesStock from './purchasesStock';
import reducer_revenueManage from './revenueManage';
import reducer_otherIncome from './otherIncome';
import reducer_login from './login'



const rootReducer = combineReducers({
  setting: reducer_setting,
  employee: reducer_employee,
  moneyAccount: reducer_money_account,
  systemAccount: reducer_systemAccount,
  prepaymentManage: reducer_prepayment_manage,
  purchasestApply: reducer_purchasest_apply,
  contactUnits: reducer_contact_unit,
  loginInfo: reducer_login,
  transferApply: reducer_transfer_apply,
  transferEttle: reducer_transfer_ettle,
  stockTransfer: reducer_stock_transfer,
  stockCheck: reducer_stock_check,
  purchasesPay:reducer_purchasesPay,
  stockSearch:reducer_stock_search,
  purchasesStock:reducer_purchasesStock,
  revenueManage:reducer_revenueManage,
  otherIncome:reducer_otherIncome
})

export default rootReducer