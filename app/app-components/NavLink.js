/**
 * Created by baobaobao on 2016/8/23.
 */

import React from 'react';
import {Link} from 'react-router';

function NavLink(props) {
    return (
        <Link {...props} activeClassName="active"/>
    );
}

module.exports = NavLink;

