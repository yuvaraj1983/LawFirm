import { Box, Button, TextField, Typography, InputAdornment } from '@mui/material'
import React from 'react';
import hero from './HeroSection.module.css';
import heroimg from '../../assets/heroimg.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const HeroSection = () => {

  const typographysx = {
    fontSize: 35
}
  return (
    // <div style={{background:'black', height:'270px',width:"100vw",display:'flex',flexDirection:'row', alignItems: 'center'}}>
    //         <div>
    //               <Typography style={{color:'white'}}>You don't have to </Typography>
    //         <br />
    //         <Typography  sx={{fontWeight:'bold'}}>Fight them alone </Typography>
    //         </div>
    //       <div>
    //          <img src="#" alt="no image found" />
    //       </div>
           
      
    // </div>

    <div  style={{backgroundColor: "#121212", height:"270px",  marginTop: "60px", display: 'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', marginBottom:'150px'
    }}>
       <div style={{display: 'flex', flexDirection:'column', marginRight: "60px"}}>
             <Typography sx={typographysx} style={{color:'white'}}>You don't have to </Typography>
             <Typography sx={typographysx}   style={{color:'white', fontWeight:'bold'}}>Fight them Alone</Typography>
             <Typography component='p' sx={{maxWidth:'20vw', fontSize:'10px', textWrap:'wrap' }} style={{color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
            <Box style={{display:'flex'}}>
             <TextField 
               InputProps={{
                style: { color: "white" },
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              
              }}
              style={{ fontColor:'white',backgroundColor:'#3D3503', borderRadius:'20px'}} fullWidth placeholder='Enter your email address'></TextField>
             <Button style={{color:'black',textDecoration:'none',textTransform:'none', height:'50px', position:'absolute', marginLeft:'225px',  marginTop:'4px', background:'#DCCA55', borderRadius:'20px'}}>Let's Talk</Button>
             </Box>
       </div>
      <div>
        <img src={heroimg} alt="No Hero image found"  style={{width:"300px", height:"220px",backgroundColor:'#DCCA55', borderRadius:'20px', objectFit: 'cover'}}/>
      </div>
    </div>

  )
}

export default HeroSection