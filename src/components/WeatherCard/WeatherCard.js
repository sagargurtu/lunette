/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';
import WeatherSprite from './subcomponents/WeatherSprite';
import Temperature from './subcomponents/Temperature';
import Location from './subcomponents/Location';
import DateTime from './subcomponents/DateTime';
import ValidationService from './services/ValidationService';

import WeatherForecast from '../../enums/WeatherForecast';
import TemperatureUnit from '../../enums/TemperatureUnit';
import TimeOfDay from '../../enums/TimeOfDay';
import Alignment from '../../enums/Alignment';
import Mode from '../../enums/Mode';

import './WeatherCard.css';

const defaultProps = {
    unit: TemperatureUnit.CELSIUS,
    align: Alignment.HORIZONTAL,
    mode: Mode.LIGHT,
    timeofday: TimeOfDay.DAY,
    forecast: WeatherForecast.UNKNOWN,
    location: '',
    datetime: '',
    dropShadow: true,
    style: {
        height: '175px',
        width: '300px',
        fontSize: '16px'
    }
};

const WeatherCard = (props) => {

    ValidationService.validate(props);

    let locationComponent = '';
    let datetimeComponent = '';
    let topContainer = '';
    let unit = props.unit || defaultProps.unit;
    let mode = props.mode || defaultProps.mode;
    let align = props.align || defaultProps.align;
    let timeofday = props.timeofday || defaultProps.timeofday;
    let style = props.style || defaultProps.style;

    if (props.location) {
        locationComponent = (
            <Location
                value={props.location}
                align={align}
                mode={mode} />
        );
    }

    if (props.datetime) {
        datetimeComponent = (
            <DateTime
                value={props.datetime}
                align={align}
                mode={mode} />
        );
    }

    if (locationComponent || datetimeComponent) {
        topContainer = (
            <div className='WeatherCard-topContainer'>
                {locationComponent}
                {datetimeComponent}
            </div>
        );
    }

    return (
        <div className={'WeatherCard-container ' +
            `WeatherCard-${mode}-mode ` +
            (Boolean(props.dropShadow) ?
                `WeatherCard-${mode}-shadow` : '')}
            style={style}>

            {topContainer}

            <div className='WeatherCard-middleContainer'>
                <WeatherSprite
                    forecast={props.forecast}
                    timeofday={timeofday}
                    mode={mode}
                    align={align} />

                <Temperature
                    value={Math.round(Number(props.temperature))}
                    unit={unit}
                    mode={mode}
                    align={align} />
            </div>
        </div>
    );
}

WeatherCard.propTypes = {
    temperature: PropTypes.number,
    unit: PropTypes.oneOf(Object.values(TemperatureUnit)),
    align: PropTypes.oneOf(Object.values(Alignment)),
    mode: PropTypes.oneOf(Object.values(Mode)),
    forecast: PropTypes.oneOf(Object.values(WeatherForecast)),
    timeofday: PropTypes.oneOf(Object.values(TimeOfDay)),
    location: PropTypes.string,
    datetime: PropTypes.string,
    dropShadow: PropTypes.bool,
    style: PropTypes.object
};

WeatherCard.defaultProps = defaultProps;

export default WeatherCard;