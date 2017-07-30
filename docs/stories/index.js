import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, FontIcon } from 'mews-ui';

storiesOf('Button', module)
  .addWithInfo('default', '', () => <Button onClick={action('clicked')}>Button label</Button>)
  .addWithInfo('raised primary', '', () => <Button onClick={action('clicked')} primary raised>Button label</Button>)
  .addWithInfo('raised with icon', '', () => <Button icon={<FontIcon value={'star'} />} onClick={action('clicked')} raised>Button with icon</Button>);
