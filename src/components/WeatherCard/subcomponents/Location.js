/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import React from 'react';

import './Location.css';

const Location = (props) => {
    return (
        <div className={'Location-container ' +
            'Location-horizontal-align ' +
            `Location-${props.mode}-mode`}>
            {props.value}
        </div>
    );
};

export default Location;