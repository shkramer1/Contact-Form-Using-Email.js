import React from 'react';
import {TextField, Grid} from '@mui/material';
import {useFormContext, Controller} from 'react-hook-form';

const ContactInput = ({name, label}) => {
const {control} =useFormContext();

  return (
    <Grid item xs={12} sm={12}>
                <Controller

            defaultValue=""
            control={control}
            name={name}
            render = {({ field})=> (
                <TextField
                    fullWidth
                    label={label}
                    required
                  
                />
            )} />
                
            
    </Grid>
  )
}

export default ContactInput;