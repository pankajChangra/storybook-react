import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
    title: 'forms/Subscription'
}

export const PrimarySubscription = () => {
    return (
        <>
            <Large />
            <Primary />
        </>
    )
}