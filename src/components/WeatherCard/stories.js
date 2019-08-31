/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object, select }
    from '@storybook/addon-knobs/react';

import WeatherCard from "./WeatherCard";
import WeatherForecast from '../../enums/WeatherForecast';
import TemperatureUnit from '../../enums/TemperatureUnit';
import TimeOfDay from '../../enums/TimeOfDay';
import Mode from '../../enums/Mode';

const resizableStyle = {
    position: 'relative',
    height: '200px',
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    resize: 'both',
    overflow: 'auto',
    margin: 'auto',
    border: '1px solid #dddddd',
    padding: '10px'
};

const stories = storiesOf('WeatherCard', module);

stories.addParameters({ options: { addonPanelInRight: true } });
stories.addDecorator(withKnobs);

stories.add("normal, light mode", () => (
    <div style={resizableStyle}>
        <WeatherCard
            unit={select('Unit', Object.values(TemperatureUnit), 'c')}
            temperature={number('Temperature', 21)}
            mode={select('Mode', Object.values(Mode), 'light')}
            timeofday={select('Time of Day', Object.values(TimeOfDay), 'day')}
            forecast={select('Forecast', Object.values(WeatherForecast),
                'scattered_thunderstorms')}
            location={text('Location', 'Current Location')}
            datetime={text('Datetime', 'August 24th, 11:00AM')}
            dropShadow={boolean('Drop Shadow', true)}
            style={object('Style', {
                'height': '85%',
                'width': '85%',
                'fontSize': '16px'
            })} />
    </div>
));

stories.add("normal, dark mode", () => (
    <div style={resizableStyle}>
        <WeatherCard
            unit={select('Unit', Object.values(TemperatureUnit), 'c')}
            temperature={number('Temperature', -1)}
            mode={select('Mode', Object.values(Mode), 'dark')}
            timeofday={select('Time of Day', Object.values(TimeOfDay), 'night')}
            forecast={select('Forecast', Object.values(WeatherForecast),
                'haze')}
            location={text('Location', 'Current Location')}
            datetime={text('Datetime', 'August 24th, 10:00PM')}
            dropShadow={boolean('Drop Shadow', true)}
            style={object('Style', {
                'height': '80%',
                'width': '85%',
                'fontSize': '16px'
            })} />
    </div>
));

stories.add("normal, minimal", () => (
    <div style={resizableStyle}>
        <WeatherCard
            unit={select('Unit', Object.values(TemperatureUnit), 'c')}
            temperature={number('Temperature', 5)}
            mode={select('Mode', Object.values(Mode), 'dark')}
            timeofday={select('Time of Day', Object.values(TimeOfDay), 'night')}
            forecast={select('Forecast', Object.values(WeatherForecast), 'fog')}
            location={text('Location', '')}
            datetime={text('Datetime', '')}
            dropShadow={boolean('Drop Shadow', true)}
            style={object('Style', {
                'height': '60%',
                'width': '70%',
                'fontSize': '16px'
            })} />
    </div>
));

stories.add("normal, styled", () => (
    <div style={resizableStyle}>
        <WeatherCard
            unit={select('Unit', Object.values(TemperatureUnit), 'c')}
            temperature={number('Temperature', 12)}
            mode={select('Mode', Object.values(Mode), 'dark')}
            timeofday={select('Time of Day', Object.values(TimeOfDay), 'night')}
            forecast={select('Forecast', Object.values(WeatherForecast),
                'clear')}
            location={text('Location', 'New York, USA')}
            datetime={text('Datetime', 'August 24th, 11:00PM')}
            dropShadow={boolean('Drop Shadow', true)}
            style={object('Style', {
                'height': '80%',
                'width': '85%',
                'fontSize': '16px',
                'backgroundImage': 'url(https://raw.githubusercontent.com/sagargurtu/lunette/master/docs/assets/images/night_sky.png)',
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover'
            })} />
    </div>
));