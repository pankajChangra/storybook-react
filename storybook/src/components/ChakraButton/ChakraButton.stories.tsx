import React from "react";
import { Button } from "@chakra-ui/button";
import { action, actions} from "@storybook/addon-actions";

export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button onClick={action('Click Handler')} colorScheme='green'>Success</Button>;
export const Danger = () => <Button {...actions('onClick', 'onMouseOver')}colorScheme='red'>Danger</Button>;