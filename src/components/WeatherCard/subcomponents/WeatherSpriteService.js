import WeatherForecast from '../../../enums/WeatherForecast';
import TimeOfDay from '../../../enums/TimeOfDay';

import sun from '../../../assets/images/WeatherCard/sun.png';
import moon from '../../../assets/images/WeatherCard/moon.png';
import snowflake from '../../../assets/images/WeatherCard/snowflake.png';
import cloudy from '../../../assets/images/WeatherCard/cloudy.png';
import fog from '../../../assets/images/WeatherCard/fog.png';
import hail from '../../../assets/images/WeatherCard/hail.png';
import haze from '../../../assets/images/WeatherCard/haze.png';
import lightRain from '../../../assets/images/WeatherCard/light_rain.png';
import cloud from '../../../assets/images/WeatherCard/cloud.png';
import cloudSun from '../../../assets/images/WeatherCard/cloud_sun.png';
import cloudMoon from '../../../assets/images/WeatherCard/cloud_moon.png';
import rain from '../../../assets/images/WeatherCard/rain.png';
import stormSun from '../../../assets/images/WeatherCard/storm_sun.png';
import stormMoon from '../../../assets/images/WeatherCard/storm_moon.png';
import showerSun from '../../../assets/images/WeatherCard/shower_sun.png';
import showerMoon from '../../../assets/images/WeatherCard/shower_moon.png';
import sleet from '../../../assets/images/WeatherCard/sleet.png';
import snow from '../../../assets/images/WeatherCard/snow.png';
import thunderstorm from '../../../assets/images/WeatherCard/thunderstorm.png';
import unknown from '../../../assets/images/WeatherCard/unknown.png';

const WeatherSpriteService = {

    getSprite: function (forecast, timeofday) {
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