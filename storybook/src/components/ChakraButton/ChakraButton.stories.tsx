import React from "react";
import { Button } from "@chakra-ui/button";
import { action, actions} from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button onClick={action('Click Handler')} colorScheme='green'>Success</Button>;
export const Danger = () => <Button {...actions('onClick', 'onMouseOver')}colorScheme='red'>Danger</Button>;

export const Log = () =>  <Button colorScheme='blue' onClick={() => console.log('Button Click', process.env.STORYBOOK_THEME)}>Log</Button>

export const Knobs = () => (
    <Button colorScheme='purple'>
        {text('Label', 'Button Label')}
    </Button>
)