/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import WeatherForecast from '../../../enums/WeatherForecast';
import TimeOfDay from '../../../enums/TimeOfDay';

import sun from '../../../assets/images/WeatherCard/sun.svg';
import moon from '../../../assets/images/WeatherCard/moon.svg';
import snowflake from '../../../assets/images/WeatherCard/snowflake.svg';
import cloudy from '../../../assets/images/WeatherCard/cloudy.svg';
import fog from '../../../assets/images/WeatherCard/fog.svg';
import hail from '../../../assets/images/WeatherCard/hail.svg';
import haze from '../../../assets/images/WeatherCard/haze.svg';
import lightRain from '../../../assets/images/WeatherCard/light_rain.svg';
import cloud from '../../../assets/images/WeatherCard/cloud.svg';
import cloudSun from '../../../assets/images/WeatherCard/cloud_sun.svg';
import cloudMoon from '../../../assets/images/WeatherCard/cloud_moon.svg';
import rain from '../../../assets/images/WeatherCard/rain.svg';
import stormSun from '../../../assets/images/WeatherCard/storm_sun.svg';
import stormMoon from '../../../assets/images/WeatherCard/storm_moon.svg';
import showerSun from '../../../assets/images/WeatherCard/shower_sun.svg';
import showerMoon from '../../../assets/images/WeatherCard/shower_moon.svg';
import sleet from '../../../assets/images/WeatherCard/sleet.svg';
import snow from '../../../assets/images/WeatherCard/snow.svg';
import thunderstorm from '../../../assets/images/WeatherCard/thunderstorm.svg';
import unknown from '../../../assets/images/WeatherCard/unknown.svg';

const WeatherSpriteService = {
    getSprite: (forecast, timeofday) => {
        let sprite;
        switch (forecast) {
            case WeatherForecast.BLIZZARD:
                sprite = snowflake;
                break;
            case WeatherForecast.CLEAR:
                sprite = timeofday === TimeOfDay.DAY ? sun : moon;
                break;
            case WeatherForecast.CLOUDY:
                sprite = cloudy;
                break;
            case WeatherForecast.FOG:
                sprite = fog;
                break;
            case WeatherForecast.HAIL:
                sprite = hail;
                break;
            case WeatherForecast.HAZE:
                sprite = haze;
                break;
            case WeatherForecast.LIGHT_RAIN:
                sprite = lightRain;
                break;
            case WeatherForecast.MIST:
                sprite = haze;
                break;
            case WeatherForecast.MOSTLY_CLOUDY:
                sprite = cloud;
                break;
            case WeatherForecast.MOSTLY_SUNNY:
                sprite = sun;
                break;
            case WeatherForecast.OVERCAST:
                sprite = cloudy;
                break;
            case WeatherForecast.PARTLY_CLOUDY:
                sprite = timeofday === TimeOfDay.DAY ? cloudSun : cloudMoon;
                break;
            case WeatherForecast.PARTLY_SUNNY:
                sprite = cloudSun;
                break;
            case WeatherForecast.RAIN:
                sprite = rain;
                break;
            case WeatherForecast.SCATTERED_CLOUDS:
                sprite = cloudy;
                break;
            case WeatherForecast.SCATTERED_THUNDERSTORMS:
                sprite = timeofday === TimeOfDay.DAY ? stormSun : stormMoon;
                break;
            case WeatherForecast.SHOWERS:
                sprite = timeofday === TimeOfDay.DAY ? showerSun : showerMoon;
                break;
            case WeatherForecast.SLEET:
                sprite = sleet;
                break;
            case WeatherForecast.SNOW:
                sprite = snow;
                break;
            case WeatherForecast.SUNNY:
                sprite = sun;
                break;
            case WeatherForecast.THUNDERSTORM:
                sprite = thunderstorm;
                break;
            default:
                sprite = unknown;
        }
        return sprite;
    }
};

export default WeatherSpriteService;