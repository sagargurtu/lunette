import React from 'react';

import './Temperature.css';

const Temperature = (props) => {
    return (
        <div className={'Temperature-container ' +
            'Temperature-horizontal-align ' +
            `Temperature-${props.mode}-mode`}>
            <span className='Temperature-value'>
                {props.value}
            </span>
            <span className='Temperature-degree'>
                &deg;
                </span>
            <span className='Temperature-unit'>
                {props.unit.toUpperCase()}
            </span>
        </div>
    );
};

export default Temperature;