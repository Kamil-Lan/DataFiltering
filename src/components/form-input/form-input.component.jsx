import React from 'react';

import {Group, FormInputC} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <Group>
        <label>{label} </label> 
        <FormInputC
            onChange={handleChange} 
            {...otherProps} 
        />
    </Group>
);

export default FormInput;