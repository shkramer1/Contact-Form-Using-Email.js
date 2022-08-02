import React from "react";

import { Typography, Card, Grid, Button } from "@mui/material";

import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
   <>
   <main className='appBackground'>
<Grid container>
  <Grid item xs={12} sm={12} md={12} lg={12}>
  <Typography variant='h3' align='center' className='appHeader'>Contact Form Using Email.js</Typography>
  </Grid>
  <Grid item xs={12} sm={12} md={12} lg={12}>
<Card className='contactCard'> 
    <ContactUs />
  </Card>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
  <Card  align='center'className='buttonCard'>
    <Button className='buttonDocs' variant='outlined' href='https://www.emailjs.com/docs/' target="_blank">Email.js Docs</Button>
  </Card>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
  <Footer />
</Grid>
</Grid>

   </main>
      
     </>
  );
}

export default App;
