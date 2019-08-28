import React from 'react';
import PropTypes from 'prop-types';
import WeatherSprite from './subcomponents/WeatherSprite';
import Temperature from './subcomponents/Temperature';

import WeatherForecast from '../../enums/WeatherForecast';
import TemperatureUnit from '../../enums/TemperatureUnit';
import TimeOfDay from '../../enums/TimeOfDay';
import Alignment from '../../enums/Alignment';
import Mode from '../../enums/Mode';

import './WeatherCard.css'

class WeatherCard extends React.Component {
    validateProps() {
        if (!isFinite(Number(this.props.temperature))) {
            throw new Error(`${this.props.temperature} is \ 
                            not a valid temperature`);
        }

        if (this.props.unit !== TemperatureUnit.CELSIUS &&
            this.props.unit !== TemperatureUnit.FAHRENHEIT) {
            throw new Error(`${this.props.unit} is not a valid unit`);
        }

        if (this.props.mode !== Mode.LIGHT &&
            this.props.mode !== Mode.DARK) {
            throw new Error(`${this.props.mode} is not a valid mode`);
        }

        if (this.props.timeofday !== TimeOfDay.DAY &&
            this.props.timeofday !== TimeOfDay.NIGHT) {
            throw new Error(`${this.props.timeofday} is not a \
                            valid time of day`);
        }
    }

    render() {
        this.validateProps();
        let dropShadow = Boolean(this.props.dropShadow);

        return (
            <div className={'WeatherCard-container ' +
                `WeatherCard-${this.props.mode}-mode ` +
                (dropShadow ? `WeatherCard-${this.props.mode}-shadow` : '')}
                style={{
                    height: this.props.height,
                    width: this.props.width,
                    fontSize: this.props.fontSize
                }}>

                <WeatherSprite
                    forecast={this.props.forecast}
                    timeofday={this.props.timeofday}
                    align={this.props.align} />

                <Temperature
                    value={Math.round(Number(this.props.temperature))}
                    unit={this.props.unit}
                    mode={this.props.mode}
                    align={this.props.align} />
            </div>
        );
    }
}

WeatherCard.propTypes = {
    temperature: PropTypes.number.isRequired,
    unit: PropTypes.oneOf(Object.values(TemperatureUnit)),
    align: PropTypes.oneOf(Object.values(Alignment)),
    mode: PropTypes.oneOf(Object.values(Mode)),
    forecast: PropTypes.oneOf(Object.values(WeatherForecast)),
    timeofday: PropTypes.oneOf(Object.values(TimeOfDay)),
    dropShadow: PropTypes.bool
};

WeatherCard.defaultProps = {
    unit: TemperatureUnit.CELSIUS,
    height: '150px',
    width: '300px',
    align: Alignment.HORIZONTAL,
    mode: Mode.LIGHT,
    timeofday: TimeOfDay.DAY,
    forecast: WeatherForecast.CLEAR,
    dropShadow: true
};

export default WeatherCard;