import React from "react";
import { Button } from "@chakra-ui/button";

export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button colorScheme='green'>Success</Button>;
export const Danger = () => <Button colorScheme='red'>Danger</Button>;