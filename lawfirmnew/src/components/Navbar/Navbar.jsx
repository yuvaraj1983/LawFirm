import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material'
import Logo from '../../assets/Logo.png'

const Navbar = () => {

    const hdr = [
        {name: "Home"},
        {name: "Attorneys"},
        {name: "Practice Areas"},
        {name: "About Us"}
    ]
  return (
    <AppBar sx={{backgroundColor:'black', display:'flex', flexDirection:'column',
     justifyContent:'space-between', textTransform: 'none', fontFamily: "Poppins", }}>
        <Toolbar >
        <img src={Logo} alt="no Logo found" />
           
            <Box sx={{marginLeft:'auto'}}>
           
                {
                    hdr.map((header) =>(
                        <Button sx={{color:'white', textTransform: 'none'}}>{header.name}</Button>
                    ))
                }
                
            </Box>
            
            <Button sx={{marginLeft:'auto', color:'white', border: 1, borderRadius:0, textTransform: 'none'}} >Contact Now</Button>
        </Toolbar>
       
    </AppBar>
  )
}

export default Navbar