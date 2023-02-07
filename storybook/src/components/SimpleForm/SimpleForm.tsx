import React from "react";
import './SimpleForm.css'
import { action } from "@storybook/addon-actions";
import { Button, Checkbox, Radio, FormLabel, Select, FormControl } from "@chakra-ui/react";

const SimpleForm = (props: any) => {
    const {size = 'medium', handleSubmit, ...rest} = props; 
    return (
        <div className="container">
            <FormControl>
                <input className={`input ${size}`} {...rest} placeholder="First name" type="text" required/>
                <input className={`input ${size}`} {...rest} placeholder="Last name" />
                <input className={`input ${size}`} {...rest} placeholder="Email" type="email" required/>
                <Radio value='Male'>Male</Radio>
                <Radio value='Female'>Female</Radio>
                <Radio value='Other'>Other</Radio>
                <FormLabel>Color</FormLabel>
                    <Select placeholder='Select Color'>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                    </Select>
                <Checkbox value='employed'>employed</Checkbox>
                <Button onClick={action('Click Handler')} colorScheme='blue'>Submit</Button>
            </FormControl>
        </div>
    )
}

export default SimpleForm;
