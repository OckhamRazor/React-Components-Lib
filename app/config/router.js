/**
 * Created by baobaobao on 2016/8/23.
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory,Redirect} from 'react-router';

//components
var Main = require('../app-components/Main');
var Home = require('../app-components/Home');
var About = require('../app-components/About');
var Components = require('../app-components/Components');
var ComponentsHome = require('../app-components/ComponentsHome');

//components lib
//loading
// var Loading = require('../components/Loading/Loading');
// var SliderContainer = require('../components/SliderContainer/SliderContainer');


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="components" components={Components}>
                <IndexRoute components={ComponentsHome}/>
                <Route path="loading" getComponent={
                    (location, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../components/Loading/Loading'))
                        })
                    }
                }/>
                <Route path="slider" getComponent={
                    (location, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../components/SliderContainer/SliderContainer'))
                        })
                    }
                }/>
            </Route>
            <Route path="about" components={About}/>
        </Route>
    </Router>
);

module.exports = routes;