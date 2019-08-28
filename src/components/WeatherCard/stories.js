import React from 'react';
import { storiesOf } from '@storybook/react';

import WeatherCard from "./WeatherCard";

storiesOf('WeatherCard', module).add("default light", () => (
    <WeatherCard
        unit='c'
        temperature={24}
        mode='light'
        height='150px'
        width='300px'
        fontSize='16px'
        timeofday='day'
        forecast='partly_sunny' />
)).add("default dark", () => (
    <WeatherCard
        unit='c'
        temperature={-17}
        mode='dark'
        height='150px'
        width='300px'
        fontSize='16px'
        timeofday='night'
        forecast='snow' />
));