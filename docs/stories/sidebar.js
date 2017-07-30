import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Sidebar } from 'mews-ui';

storiesOf('Sidebar', module)
    .addWithInfo('default', '', () => <Sidebar title={'Sidebar long title'} opened>{'Simple sidebar content'}</Sidebar>)
