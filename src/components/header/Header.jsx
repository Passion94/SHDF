
import {AppBar, Toolbar,styled,Box, Typography,InputBase,Menu, MenuItem, Button, Container } from "@mui/material"
import React, { useState } from 'react'
import { Stack } from "@mui/system";


const Header = () => {
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
      });
      const SocialBox = styled (Box)({
        display:'flex',
        gap:3
      })
    
      const SearchBox =styled(Box)({
        display:'Flex',
        alignItems:"center",
        color:'white'
        
      });
    
      return (
        
        <Container maxWidth={false} sx={{background:'#32CD32', position:'sticky',
        color:'white', height:'100px', Width :'100vh', cursor: 'pointer'}}>
        
        <StyledToolbar> 
        <SocialBox sx={{cursor:'pointer'}}>
        <Stack   
sx={{padding: { xs:'10px 0px 5px 0px', sm:'20px 0px 30px 10px', md: "30px 30px 0px 10px"}, fontWeight:'600',
 fontSize:{xs:'20px', sm:'30px', md:'40px'}, display:'flex', alignItems:'center',
 flexDirection: { xs: "column", md: "row"}, gap: { xs: '0', sm:'0', md:'5'}

 }}>


      <Typography variant="body3" > SHDF</Typography>
      <Typography sx={{fontSize:'20px' }} >for Sustainability</Typography>
      </Stack>
        </SocialBox>
       
        <SearchBox><Button variant="outlined" 
        sx={{backgroundColor:'white', borderRadius:'6px',
         color:'#e34e09',fontWeight:'600', border:'none', '&:hover':{border:'none'}}}>
         Donate</Button></SearchBox>
    
        </StyledToolbar>
       
        </Container>
        
      )
}

export default Header;
