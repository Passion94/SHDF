
import {AppBar, Toolbar,styled,Box, Typography,InputBase,Menu, MenuItem } from "@mui/material"
import {Facebook, Instagram, Menu as MenuIcon, Search, Twitter} from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
      });
      const SocialBox = styled (Box)({
        display:'flex',
        gap:10
      })
      const MenuBox =styled(Box)({
        display:'Flex',
        gap: 30,
      });
      const SearchBox =styled(Box)({
        display:'Flex',
        gap: 5,
        alignItems:"center",
        color:'white'
        
      });
      const StyledLink=styled(Link)({
        textDecoration:'none',
        color:'white'
      })
      const MenuItems=[
        {Id:1, Name:"Home", link:"/"},
        {Id:2, Name:"About Us", link:"/everyabout"},
        {Id:3, Name:"Portfolio", link:"/b"},
        {Id:4, Name:"Blog", link:"/blog"},
        {Id:5, Name:"Contact Us", link:"/a"},
      ]
    
      const [open,SetOpen]=useState(false);
      return (
        <AppBar sx={{background:'black', position:'static'}}><StyledToolbar> 
        <SocialBox sx={{cursor:'pointer'}}>
       <a style={{color:'white'}} href="https://www.facebook.com/SusewFoundation/https://www.facebook.com/SusewFoundation/"><Facebook/></a>
       <a style={{color:'white'}} href="https://twitter.com/Susewfoundation?t=9wbYtaUFN5LTLud43rpp9Q&s=09"> <Twitter/></a>
       
        </SocialBox>
        <MenuBox sx={{display:{xs:'none',
        sm:'none', 
        md:'flex',
         lg:'flex'}}}
         >
      {MenuItems.map((item, index) =>
       <StyledLink to={item.link}>{item.Name}</StyledLink> 
      )}
      
   
      
          
       
       </MenuBox>
        <SearchBox><Search/><InputBase placeholder="Search...." sx={{color:'white'}}/></SearchBox>
        <MenuIcon sx={{ display:{xs:'block',
        sm:'block',
         md:'none', 
         lg:'none',
         cursor:'pointer'} }}
         onClick={()=> SetOpen(!open)}
         
         />
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
           
            open={open}
            onClose={()=>SetOpen(!open)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
          <Box sx={{width:350, height:"50vh"}}>
    
          {MenuItems.map((item)=>(
            <MenuItem sx={{cursor:'pointer', fontSize:'14px'}}>{item.Name}</MenuItem>
          ))}
        
          </Box>
            
           
            
          </Menu>
        </AppBar>
        
      )
}

export default NavBar;
