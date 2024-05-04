import React from 'react'
import LabelSection from '../LabelSection/LabelSection'
import { Grid, Typography } from '@mui/material'

const IntroduceSection = () => {
  return (
    <div  style={{background:'black',color:'white', margin:'auto', width: '100%',display:'flex', flexDirection:'row',justifyContent:'space-between', alignItems:'center', marginBottom:'100px'}}>
        <div style={{ width: '50%'}}>
             <LabelSection label="Let's Introduce Ourself" />
        </div>
       <div  style={{ width: '50%', margin:'50px auto',alignContent:'center', borderLeft:'2px solid gray', padding:'15px'}}>
        <Typography style={{color:'white', textAlign:'left'}} variant='h5' component='h3'>Criminal Lawyer</Typography>
        <p style={{color:'gray', textAlign:'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
       </div>

    </div>

    // <Grid container>
    //     <Grid item>
    //     <LabelSection label="Let's Introduce Ourself" />
    //     </Grid>
    //     <Grid item>
    //     <LabelSection label="Let's Introduce Ourself" />
    //     </Grid>
    // </Grid>
   
  )
}

export default IntroduceSection