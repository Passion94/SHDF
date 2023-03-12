import { Avatar, Box, Container, Stack, styled, Typography } from '@mui/material'
import React from 'react'
// import "../../index.css"
const Ourmision = () => {
  const Title=styled(Typography)({
color:'teal',
display:'flex',
justifyContent:'center',
marginBottom:'30px',
marginTop:'30px',
fontFamily:'Barlow Condensed',
  })
  const Description=styled(Typography)({
    color: '#666',
    fontSize: '18px',
    lineHeight: '25px',
    fontFamily:'Montserrat'
  })
  return (
    <Container>
      <Stack direction={{xs:'column', md:'row'}}
       gap={{sm:0,md:8}} sx={{ display:'flex', alignItems:'center' }}>
<Container flex={3} sx={{marginBottom:'40px'}} >
<Description variant='body2'> 
        <Title variant='h4'> Our Mission</Title>
        To promote the delivery of value,
        build consensus, and natural administrations,
          to youth, women and the vulnerable in the 
          society through sustainable environmental, 
          socio-political and economic development 
           that stimulate access to means, measures
            and models that will enable us sustainable 
            development through innovative actions and
          meaningful community projects that promote justice,
           peace and equal rights of all.
        </Description>
        <Description variant='body2'> 
        <Title variant='h4'> Our Vision</Title>
        To provide focused opportunities to young people
         to live, and advance equal access to human rights,
          gender justice, inclusive education, acountable
           democratic governance, health, climate change 
           and  sustainable environment and partake in 
           a full life, strengthen their unique leadership
            styles and expand networks. Especially maximizing 
            the creative energies of young people as sustainable
             development catalysts.
        </Description>
</Container>
        <Container align={{xs:'center', md:'center'}}>
        <Avatar  variant='square' src='aboutimage/mission.jpeg' sx={{ height:'100%', width:{xs:'100%', sm:'100%', md:'100%'}, borderRadius:'6px'}}/>
        </Container>
      </Stack>
    </Container>
  )
}

export default Ourmision
