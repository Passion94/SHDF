import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material'

import React from 'react'
import Card from './components/cards/Card';
import Landing from './pages/landing/Landing';

import Allcard from './pages/recents/Allcard';
import Sidebar from './pages/sidebar/Sidebar';

const Title=styled(Typography)({
  color:'teal',
  display:'flex',
  justifyContent:'center',
  marginBottom:'30px',
  fontFamily:'Barlow Condensed',
    })

const Home = () => {
  return (
    <Box>
    <Landing/>
    <Container>
    
   
    <Box>
    
      <Stack gap={4} direction={{xs:'column', md:'row'}} sx={{display:'flex'}}>
      <Box sx={{flex:'8'}} >
      <Allcard/>
      </Box>
      <Box sx={{flex:'3'}} mt={9}>
        <Sidebar/>
      </Box>
      </Stack>
    </Box>
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

export default Home;
