/**
 * Created by baobaobao on 2016/8/23.
 */

import React from 'react';
import {IndexLink} from 'react-router';
//components
var NavLink = require('../app-components/NavLink');

var Components = React.createClass({
    render: function () {
        return (
            <div className="page-components">
                <nav className="components-nav">
                    <ul className="components-list">
                        <li className="components-item"><IndexLink to="/components" activeClassName="active">Components Home</IndexLink></li>
                        <li className="components-item"><NavLink to="/components/loading">Loading</NavLink></li>
                    </ul>
                </nav>
                <div className="components-content">{this.props.children }</div>
            </div>
        );
    }
});

module.exports = Components;

