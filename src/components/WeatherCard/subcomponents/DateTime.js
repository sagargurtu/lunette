/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import React from 'react';

import './DateTime.css';

const DateTime = (props) => {
    return (
        <div className={'DateTime-container ' +
            'DateTime-horizontal-align ' +
            `DateTime-${props.mode}-mode`}>
            {props.value}
        </div>
    );
};

export default DateTime;