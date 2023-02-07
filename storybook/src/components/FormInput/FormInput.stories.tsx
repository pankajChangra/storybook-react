import React from "react";
import FormInput from "./FormInput";

export default {
    title: 'Form/FormInput',
    component: FormInput
}

export const Small = () => <FormInput size='small' placeholder='small size' />

Small.storyName =  'Small Input';