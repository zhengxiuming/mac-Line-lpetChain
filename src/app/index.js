import React from "react";
import {
    render
} from "react-dom";

import {
    Router,
    Route,
    IndexRoute,
    hashHistory,
    IndexRedirect
} from "react-router";

import Layout from "./components/layout";
import SettingContainer from "./containers/settingContainer";
import Card from "./containers/card";
import Client from './containers/client';
import Medicine from './containers/medicine';
import Repertory from './containers/repertory';
import Finance from './containers/finance';
import Standard from './containers/standard';
import Statement from './containers/statement';
import Marketing from './containers/marketing';
import Systemsetting from './containers/systemsetting';
import Expenses from './components/chainSettings/expenses';
import Employee from './containers/employee';
import ContactUnit from './containers/contactUnit';

import MoneyAccount from './containers/moneyAccount';
import PrepaymentManage from './containers/prepaymentManage';
import SystemAccount from './containers/systemAccount';
import PurchasesApply from './containers/purchasesApply';
import StockCheck from './containers/stockCheck';
import PurchasesPay from './containers/purchasesPay';
import StockSearch from './containers/stockSearch';
import PurchasesStock from './containers/purchasesStock';
import TransferApply from './containers/transferApply';
import TransferEttle from './containers/transferettle';
import StockTransfer from './containers/stockTransfer';
import RevenueManage from './containers/revenueManage';
import OtherIncome from './containers/otherIncome';
import FinanceExpend from './containers/financeExpend';

import RepertoryTransfer from './components/transferApply/repertoryTransfer';
import CheckTransfer from './components/transferettle/checktransfer';
import NewTransfer from './components/transferettle/newtransfer';
import CheckStockTransferA from './components/stockTransfer/checkStockTransfera';
import CheckStockSheet from './components/stockCheck/checkStockSheet';
import NewStockSheet from './components/stockCheck/newStockSheet';
import AddPayment from './components/purchasesPay/addPayment';
import CheckPayment from './components/purchasesPay/checkPayment';
import NewPurchase from './components/purchasesStock/newPurchase';
import CheckPurchase from './components/purchasesStock/checkPurchase';
import RevenuePaidSheet from './components/revenueManage/revenuePaidSheet';



import configureStore from "./store/configureStore"

import {
    Provider
} from 'react-redux';
let store = configureStore()

const lpet_app = document.getElementById('lpet_app');
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                
                //<IndexRoute component={SettingContainer}/>
                <Route path="/settingContainer" component={SettingContainer}></Route>
                <Route path="/card" component={Card}/>
                <Route path="/client" component={Client}/>
                <Route path="/medicine" component={Medicine}/>
                <Route path="/repertory" component={Repertory}>
                    <Route path="/prepaymentManage" component={PrepaymentManage}/> 
                    <Route path="/purchasesApply" component={PurchasesApply}/>
                    <Route path="/purchasesStock" component={PurchasesStock}>
                        <Route path="/newPurchase" component={NewPurchase}/>
                        <Route path='/checkPurchase' component={CheckPurchase}/>
                    </Route>
                    <Route path="/transferApply" component={TransferApply}>
                        <Route path="/repertoryTransfer" component={RepertoryTransfer}/>
                    </Route>
                    <Route path="/stockTransfer" component={StockTransfer}>
                        <Route path="/checkStockTransferA" component={CheckStockTransferA}/>
                        {/*<Route path="/checkStockTransferB" component={CheckStockTransferB}/>*/}
                    </Route>
                    <Route path="/stockSearch" component={StockSearch}>

                    </Route>
                    <Route path="/stockCheck" component={StockCheck}>
                        <Route path="/checkStockSheet" component={CheckStockSheet}/>
                        <Route path="/newStockSheet" component={NewStockSheet}/>
                    </Route>
                    <Route path="/purchasesPay" component={PurchasesPay}>
                        <Route path="/addPayment" component={AddPayment}/>
                        <Route path="/checkPayment" component={CheckPayment}/>
                    </Route>
                    <Route path="/transferettle" component={TransferEttle}>
                        <Route path="/checktransfer" component={CheckTransfer}/>
                        <Route path="/newtransfer" component={NewTransfer}/>
                    </Route>
                    <IndexRedirect to="/prepaymentManage" />
                 </Route>
                <Route path="/finance" component={Finance}>
                    <Route path="/revenueManage" component={RevenueManage}>
                        <Route path='/revenuePaidSheet' component={RevenuePaidSheet}/>
                    </Route>
                    <Route path="/otherIncome" component={OtherIncome}/>
                    <Route path="/financeExpend" component={FinanceExpend}/>
                    <Route path="/wageManage"/>
                    <Route path="/profitDividend"/>
                    <Route path="/fundSearch"/>
                    <Route path="/cashierGather"/>
                    <IndexRedirect to="/revenueManage"/>
                </Route>
                <Route path="/standard" component={Standard}/>
                <Route path="/statement" component={Statement}/>
                <Route path="/marketing" component={Marketing}/>
                <Route path="/systemsetting" component={Systemsetting}>
                    <Route path="/expenses" component={Expenses}/>
                    <Route path="/employee" component={Employee}/>
                    <Route path="/contactunit" component={ContactUnit}/>
                    <Route path="/moneyAccount" component={MoneyAccount}/>
                    <Route path="/systemAccount" component={SystemAccount}/>
                    <IndexRedirect to="/expenses" />
                </Route>
                <IndexRedirect to="/settingContainer" />
            </Route>
        </Router>
    </Provider>, lpet_app);