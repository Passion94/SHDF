import { Avatar, Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../sidebar/Sidebar'


const Whatwedo = () => {
    const Title= styled(Typography)({
        color:'white',
        fontWeight:'600',
        display:'flex',
        justifyContent:'center',
        marginBottom:'30px',
       fontSize:'30px',
       fontFamily:'Barlow Condensed',
       backgroundColor:'#e34e09'
      

    })
  return (
  <Box  >
  <Container  >
  <Stack direction={{xs:'column', md:'row'}} gap={4} sx={{display:'flex'}}>
  <Box  flex={8} mt={10}>
  <></>
  <Title> What we do </Title>
  <Avatar variant='square'  sx={{height:'50%', width:'100%', borderRadius:'6px'}}
      src='aboutimage/vision.jpeg'
    />





<Typography sx={{fontFamily:'Montserrat'}} className='PostDesc' mt={5}> How is it done
    orem Ipsum is simply dummy text of 
     printing and typesetting industry.
      Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s,
       when an unknown printer took a galley of
        type and scrambled it to make a type specimen
         book. It has survived not only five centuries,
          but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop
     publishing software like Aldus PageMaker including versions of Lorem Ipsum
     How is it done
    orem Ipsum is simply dummy text of 
     printing and typesetting industry.
      Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s,
       when an unknown printer took a galley of
        type and scrambled it to make a type specimen
         book. It has survived not only five centuries,
          but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop
     
    
    </Typography>
    </Box>
   
    </Stack>
  </Container>
  </Box>
   
  
  
)
}

export default Whatwedo
