/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: false,
});
setAddon(infoAddon);

const req = require.context('../stories', true, /.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
