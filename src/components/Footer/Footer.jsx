import React from 'react';

import {  CssBaseline, Grid,  Link,  Typography} from '@mui/material';
import { Copyright } from '@mui/icons-material';
import './Footer.css';




const Footer = () => {

  return (
    <>
    <CssBaseline/>
       <Grid container className='footer'>
       <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography align='center' className='textFooter'> 
          <Copyright className='copyrightIcon' />
         2022 -
         Designed & Built by 
         <Link className='footerLink' href='https://shancodes.com/' target='_blank' underline='hover'> ShanCodes</Link>
         </Typography>
      
            </Grid>
         
       
       </Grid>
    
    </>
  )
}

export default Footer;