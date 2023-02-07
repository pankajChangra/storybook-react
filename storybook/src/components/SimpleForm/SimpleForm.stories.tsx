import React from "react";
import SimpleForm from "./SimpleForm";

export default {
    title: 'SimpleForm',
    component: SimpleForm
}

export const Small = () => <SimpleForm size='small' placeholder='small size' />

Small.storyName =  'Small Input';
