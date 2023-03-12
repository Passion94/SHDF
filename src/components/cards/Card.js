import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import "./card.css"
const Card = () => {

  return (
    <Box>
      <CardMedia
       sx={{borderRadius:'6px'}}
        component="img"
        alt="Ankara"
        height="100%"
        image="https://informate.ng/wp-content/uploads/2021/08/pexels-rodnae-productions-6192165-1.jpg"
      />
      <CardContent>
      <Typography  sx={{display:'flex', justifyContent:'center', gap:'35px'}} >
      <Typography  gutterBottom variant="body1" align='center' color={"#be9656"} component="div">
        Climate
        </Typography>
        <Typography align='center' gutterBottom variant="body1" color={"#be9656"} component="div">
        Environment
        </Typography>
      </Typography>
       
        <Typography gutterBottom variant="h5" align='center' component="div">
        Lorem ipsum generator.
        </Typography>
        <Typography gutterBottom variant="body2" align='center' component="div">
         1 hour ago.
        </Typography>
        <Typography variant="body1"  color="text.secondary" className='bodytypography' >
        Ankara's are native made cloth's unique to the African culture,
         shared with the world at large. You look more original in Ankara natives,
         share the love today but getting one for a loved one. 
       
        </Typography>
      </CardContent>
      
    
    </Box>
  )
}

export default Card;
