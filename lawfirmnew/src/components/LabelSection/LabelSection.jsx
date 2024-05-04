import { Typography } from '@mui/material'
import React from 'react'

const LabelSection = ({label}) => {
  return (
    <div >
        
         <Typography textAlign='center' component='h3' variant='h3' size='large'>{label}</Typography>
    </div>
  
  )
}

export default LabelSection