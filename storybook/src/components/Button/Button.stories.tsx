import React from "react";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

interface ArgValue {
    variant: string;
    children: string;
}

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

/**
 * Using Args In V6
 * @param args 
 * @returns 
 */
const Template = (args: ArgValue) => <Button {...args} />

// Call Template
export const PrimaryA: any = Template.bind({});
PrimaryA.args = {
    variant: 'primary',
    // children: 'Primary Args'
};

export const LongPrimaryA: any = Template.bind({});
LongPrimaryA.args = {
    ...PrimaryA.args,
    // children: 'Long Primary Args'
};

export const SecondaryA: any = Template.bind({});
SecondaryA.agrs = {
    variant: 'secondary',
    // children: 'Secondary Args'
};

export const SuccessA: any = Template.bind({});
SuccessA.agrs = {
    variant: 'success',
    // children: 'Success Args'
};
