/**
 * Addons Example With Chakra Ui Button
 */

import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
    title: 'Chakras/Button',
    component: Button,
    argTypes: {
        onClick: {action: 'Clicked'}
    }
}

interface ArgValue {
    colorScheme: string;
    children: string;
}

const Template = (args: ArgValue) => <Button {...args} />

export const Success: any = Template.bind({});
Success.args = {
    colorScheme: 'green',
    children: 'Success'
}

export const Danger: any = Template.bind({});
Danger.args = {
    colorScheme: 'red',
    children: 'Danger'
}
