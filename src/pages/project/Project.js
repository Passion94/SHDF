
import { Avatar, Box, Container, Typography } from '@mui/material'
import React from 'react'


const Project = () => {
  return (
    <Container sx={{height:'500px'}}>
      <Box align={'center'} mt={20}>

        <Avatar
        
        src='https://contentionary-git-dev-cttn-pro.vercel.app/images/state/under-construction.svg'
        sx={{width:'40%', height:'40%', color:'red'}}
        > </Avatar>
              <Typography variant='h5'> Bear with us please 🐻
        <Typography>This page is under construction...</Typography></Typography>
      </Box>
    </Container>
  )
}

export default Project
