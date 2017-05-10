import React from 'react';
import ReactDOM from 'react-dom';
import {
    render
} from 'react-dom';
import Header from './header.js';
import Lpetnav from '../components/lpetnav.js';

let Layout = React.createClass({
    render() {
        return (
            <div className="content">
                <Header/>
                    <div className="chain_body clearfix" id="chain_body">
                            {this.props.children}
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

export default Layout;