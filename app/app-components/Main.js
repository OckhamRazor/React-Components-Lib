/**
 * Created by baobaobao on 2016/8/23.
 */

import React from 'react';
import {IndexLink} from 'react-router';

//components
var NavLink = require('../app-components/NavLink');
//global css
require('../main.css');

var Main = React.createClass({
    render: function () {
        return (
            <div className="page">
                <div className="nav-bar">
                    <h1>Razor's Components</h1>
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                            <li className="nav-item"><NavLink to="/components">Components</NavLink></li>
                            <li className="nav-item"><NavLink to='/about'>About</NavLink></li>
                        </ul>
                    </nav>
                </div>

                {this.props.children || <Home/>}
            </div>
        );
    }
});

module.exports = Main;

