/**
 * Created by baobaobao on 2016/8/23.
 */

import React from 'react';
require('./loading.css');

function Loading(props) {
    return (
        <div className="loading-container">
            <div className="loading"></div>
            <p>Loading...</p>
        </div>

    )
}

module.exports = Loading;