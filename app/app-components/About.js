/**
 * Created by baobaobao on 2016/8/23.
 */

import React from 'react';

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h3 className="about-title">About</h3>
                <p className="about-p">I'm creating the library of components.I hope that the lib can help me sometimes just like a book,to become rich with my experience.I hope that the great components are retained here.</p>
                <ul className="about-list">
                    <li className="about-item">Version: <span>v0.0.1</span></li>
                    <li className="about-item">Author: <span>Ockham's razor</span></li>
                    <li className="about-item">Start-Date: <span>2016-8-23</span></li>
                </ul>
            </div>
        );
    }
});

module.exports = About;

