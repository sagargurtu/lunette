/*------------------------------------------------------------------------------
 *  Copyright (c) 2019 Sagar Gurtu.
 *  Licensed under the MIT License.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

import { addParameters, configure } from "@storybook/react";
import theme from './theme';

const req = require.context('../src/components', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

addParameters({
	options: {
		theme: theme,
		addonPanelInRight: true
	},
});

configure(loadStories, module);