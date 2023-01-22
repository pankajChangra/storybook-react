import React from "react";
import FormInput from "./FormInput";

export default {
    title: 'Form/FormInput',
    component: FormInput
}

export const Small = () => <FormInput size='small' placeholder='small size' />
export const Medium = () => <FormInput size='medium' placeholder='medium size' />
export const Large = () => <FormInput size='large' placeholder='large size' />

Small.storyName =  'Small Input';