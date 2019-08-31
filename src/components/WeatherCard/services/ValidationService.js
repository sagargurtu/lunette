/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import TemperatureUnit from '../../../enums/TemperatureUnit';
import TimeOfDay from '../../../enums/TimeOfDay';
import Alignment from '../../../enums/Alignment';
import Mode from '../../../enums/Mode';

const ValidationService = {
    validate: (props) => {
        if (!isFinite(Number(props.temperature))) {
            throw new Error(`${props.temperature} is not a valid temperature`);
        }

        if (props.unit &&
            props.unit !== TemperatureUnit.CELSIUS &&
            props.unit !== TemperatureUnit.FAHRENHEIT) {
            throw new Error(`${props.unit} is not a valid unit`);
        }

        if (props.align &&
            props.align !== Alignment.HORIZONTAL &&
            props.align !== Alignment.VERTICAL) {
            throw new Error(`${props.align} is not a valid alignment`);
        }

        if (props.mode &&
            props.mode !== Mode.LIGHT &&
            props.mode !== Mode.DARK) {
            throw new Error(`${props.mode} is not a valid mode`);
        }

        if (props.timeofday &&
            props.timeofday !== TimeOfDay.DAY &&
            props.timeofday !== TimeOfDay.NIGHT) {
            throw new Error(`${props.timeofday} is not a valid time of day`);
        }
    }
};

export default ValidationService;