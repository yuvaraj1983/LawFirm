import React from 'react'
import { Card, CardActionArea,CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Gift from "../../assets/gift.png"
const CardSection = ({perc}) => {
    console.log("perc", perc)
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'black', border:'1px solid gray', borderRadius:'10px' , margin:'10px' }}>
    <CardActionArea>
      <CardContent style={{width:'100%', display:'flex',  justifyContent:'flex-start'}}>
        <div style={{width:'100%', display:'flex',flexDirection:'column',  justifyContent:'flex-start'}}>
        <div style={{width:'100%', display:'flex',  justifyContent:'flex-start'}}>
              <img sx={{alignContent:'left'}} style={{alignContent:'left', background:'black',display: "inline-block;"}} src={Gift} alt="" />
        </div>
              <Typography sx={{color:'white', textAlign:'left'}}  gutterBottom variant="h5" component="div">
         { `${perc}% Success Rate` }
        </Typography>
      
        <Typography sx={{color:'gray', textAlign:'left'}} >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </Typography>
        </div>
       
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button style={{background:'#DCCA55', color:'black',textTransform:'none',   borderRadius:'20px', width:'125px'}}>
        Read More
      </Button>
    </CardActions>
  </Card>
  )
}

export default CardSection