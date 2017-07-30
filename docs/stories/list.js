import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { List, ListItem } from 'mews-ui';

const items = [
    'Sed at arcu eget nunc ullamcorper luctus quis eget diam.',
    'Sed vel ligula sed sapien vestibulum dignissim.',
    'Ut placerat risus eu ante fringilla, non euismod turpis condimentum.',
    'Maecenas quis odio pulvinar, efficitur eros sed, commodo ligula.',
    'Pellentesque id dolor quis eros facilisis venenatis.',
];

storiesOf('List', module)
    .addWithInfo('multiselect', '', () => <List multiselect>{items.map((i, index) => <ListItem key={index}>{i}</ListItem>)}</List>)
