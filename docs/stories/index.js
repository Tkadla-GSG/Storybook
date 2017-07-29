import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from 'mews-ui';

storiesOf('Button', module)
  .addWithInfo('with text', '', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .addWithInfo('with some emoji', '', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
