import { Avatar, Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Card from '../../components/cards/Card'
import Sidebar from '../sidebar/Sidebar'
import './blog.css'

const Blog = () => {
    const Title= styled(Typography)({
        color:'white',
        fontWeight:'600',
        display:'flex',
        justifyContent:'center',
        marginBottom:'30px',
       fontSize:'30px',
       fontFamily:'Barlow Condensed',
       backgroundColor:'#e34e09',
       marginTop:'20px'
      

    })
  return (
    <Box  >
    <Card/>
   
    
    <Container  >
    <Stack direction={{xs:'column', md:'row'}} gap={4} sx={{display:'flex'}}>
    <Box  flex={8}>
    <Title>
How is it don lorem
</Title>
    <Avatar variant='square'  sx={{height:'400px', width:'100%', borderRadius:'6px'}}
        src='https://d3f9k0n15ckvhe.cloudfront.net/wp-content/uploads/2021/10/AdobeStock_282255808-1.jpeg'
      />



<Grid mb={4} rowSpacing={2} columnSpacing={{xs:1, sm:2, md:6}} sx={{display:'flex', color:'#b39656'}} >
<Grid flex={6} sx={{display:'flex', alignItems:'center'}}>Author<Typography sx={{fontWeight:'600', paddingLeft:'20px'}}>Buchi</Typography></Grid>
<Grid flex={1}>1 hour ago</Grid>
</Grid>

<Typography sx={{ fontFamily:'Montserrat'}} className='PostDesc'> How is it done
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
      <Box flex={4}>
        <Sidebar/>
      </Box>
      </Stack>
    </Container>
    
    <Container>
    
   <Box mt={10}>
   <Title> Recents Post</Title>
    <Grid container rowSpacing={2} columnSpacing={{xs:1, sm:2, md:6}} >
    <Grid item md={4}><Card/></Grid>
    <Grid item md={4}><Card/></Grid>
    <Grid item md={4}><Card/></Grid>
    <Grid item md={4}><Card/></Grid>
    <Grid item md={4}><Card/></Grid>
    <Grid item md={4}><Card/></Grid>
    </Grid>
    </Box>
    
    
    </Container>
    </Box>
     
    
    
  )
}

export default Blog
