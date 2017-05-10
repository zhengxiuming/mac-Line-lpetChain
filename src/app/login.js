import React from "react" ;
import {render} from "react-dom" ;

import {Router, Route, IndexRoute, hashHistory,IndexRedirect} from  "react-router" ;

import Layout from "./components/loginLayout";
import configureStore from "./store/configureStore"
import loginContainer from "./containers/login"
import {Provider} from 'react-redux';
let store = configureStore()

const lpet_app = document.getElementById('lpet_app');
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <Route path="/login" component={loginContainer}/>
                <IndexRedirect to="/login" />
            </Route>
        </Router>
    </Provider>
    , lpet_app);

