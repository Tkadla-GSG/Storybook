import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Dialog } from 'mews-ui';

class DialogComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        this.setState({
            opened: true,
        });
    }

    handleOnClose() {
        this.setState({
            opened: false,
        });
    }

    render() {
        return(
            <div>
                <Button onClick={this.handleOnClick} primary raised>Open dialog</Button>
                <Dialog opened={this.state.opened} onBackdropClick={this.handleOnClose}>
                    {'Simple dialog'}
                </Dialog>
            </div>
        );
    }
}

storiesOf('Dialog', module)
    .addWithInfo('opened', '', () => <Dialog opened={true}>{'Dialog opened by default'}</Dialog>)
    .addWithInfo('with button opener', '', () => {
        return (<DialogComponent />);
    })
