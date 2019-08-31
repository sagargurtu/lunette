/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import React from 'react';
import WeatherSpriteService from '../services/WeatherSpriteService';
import nlsBundle from '../../../nls/nlsBundle';

import './WeatherSprite.css';

const WeatherSprite = (props) => {

    let sprite = WeatherSpriteService.getSprite(props.forecast,
        props.timeofday);
    let forecast = nlsBundle[props.forecast] || nlsBundle['unknown'];

    return (
        <div className={`WeatherSprite-container ` +
            `WeatherSprite-${props.mode}-mode ` +
            `WeatherSprite-horizontal-align`}>
            <img
                alt='Sprite'
                className='WeatherSprite-icon'
                src={sprite} />
            <div className='WeatherSprite-forecast'>
                {forecast}
            </div>
        </div>
    );
}

export default WeatherSprite;