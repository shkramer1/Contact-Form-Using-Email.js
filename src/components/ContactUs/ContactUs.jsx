import React, { useRef, useState} from 'react';
import './ContactStyles.css';

import { useForm, FormProvider } from 'react-hook-form';
import {Grid, Typography, Button, TextField, Card, CardContent, IconButton, CssBaseline, Snackbar, useTheme, useMediaQuery, 
   } from '@mui/material';
import {Close} from '@mui/icons-material'
import emailjs from '@emailjs/browser';




const ContactUs = () => {
   const [open, setOpen] = React.useState(false);
   const [formSuccess, setFormSuccess] = useState()


    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
    
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

const { register } = useForm();


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm(
        'SERVICE_ID', 
      'TEMPLATE_ID', 
      form.current, 'PUBLIC_KEY')
        .then((result) => {
          setOpen(true);
      window.location.reload(false)
          setFormSuccess(true);
            console.log('success');
        }, (error) => {
          setFormSuccess(false);
            console.log(error, 'error not sent');
        });
    };
   

  return (
    <>
    <CssBaseline />
   
  
   
      <Grid container className='contactlayout'>
         <Grid item xs={12} sm={12} md={12} lg={12} >
      <div className='border'>
    <Card align='center' className='contactBg'>
    
      <CardContent>
    <Typography variant='h2' className='contactText'>Contact</Typography> 

  </CardContent>

  <CardContent>
    <div align='center'>
      <FormProvider> 
      <form ref={form} id='contact-form' align='center' onSubmit={sendEmail}>
     
     
  <TextField 
  required
  variant='filled'
  InputLabelProps={{className: 'label'}}
  type='text' 
  name='username' 
  label='Name' 
  className='input' 
  fullWidth
  {...register('username', { required: true })}/>
  <br/>

  <TextField 
  required
   variant='filled'
    InputLabelProps={{className: 'label'}}
  type='email'
   name='user_email' 
  label='Email' 
  className='input'
  fullWidth
  
  {...register('user_email', { required: true })}/>

 

  <TextField
  required
   variant='filled'
    InputLabelProps={{className: 'label'}}
  name='message' 
  label='Please describe your company/project here' 
  className='textarea'
  {...register('message', { required: true })}
  maxLength='1500'
  fullWidth
  multiline
  rows={10}
  />
 
  <br/>
  <Button type='submit' className='buttonContact' >Send</Button>
  {formSuccess ? (
  <Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message="Message Sent"
        action={action}
      /> )
      : 
       (<Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message="ERROR! Message NOT sent"
        action={action}
      />
      )}
</form>

</FormProvider>
    </div>
    </CardContent>
    
   
    </Card>
    </div>
    </Grid>
    </Grid>
    
    
    
    
   

    
    </>
  );
}

export default ContactUs;