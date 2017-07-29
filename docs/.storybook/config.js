/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: false,
});
setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
