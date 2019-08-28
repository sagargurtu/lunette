import React from 'react';
import WeatherSpriteService from './WeatherSpriteService';

import './WeatherSprite.css';

const WeatherSprite = (props) => {
    let sprite = WeatherSpriteService.getSprite(props.forecast,
        props.timeofday);
    return (
        <img
            alt='Sprite'
            className='WeatherSprite-icon WeatherSprite-horizontal-align'
            src={sprite} />
    );
}

export default WeatherSprite;