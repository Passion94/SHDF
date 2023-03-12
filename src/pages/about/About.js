import { Avatar, Box, Grid, Stack, styled, Typography } from '@mui/material'

import React from 'react'



const About = () => {
  
  const CoverBox= styled(Stack)({
   alignItems:'center',
    padding:'20px',
    backgroundColor:'#f6f9fc',
    
  })
  const StyledAvatar=styled(Avatar)({
    height:'400px',
    display:'flex',
    borderRadius:'6px'
    
    

  })
  return (
    <Box mb={10}>
    <CoverBox direction={{xs:'column', md:'row'}} gap={{sm:2,md:4, lg:8}} >
    <Grid>
    <StyledAvatar variant='square'
             src='/aboutimage/about1.jpeg'
                sx={{ width:{xs:'100%',sm:'100%', md:'600px'}}}
             />
              </Grid>
              <Typography   sx={{backgroundColor:'#f6f9fc', fontSize:{xs:'24px', sm:'30px', md:'40px',lg:'68px', fontFamily:'Barlow Condensed'}}}> Making the world a better place </Typography>
   
    
   
    
     
      


     
        
     </CoverBox>
     </Box>
  )
}

export default About;
