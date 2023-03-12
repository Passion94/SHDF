
import {AppBar, Toolbar,styled,Box, Typography,InputBase,Menu, MenuItem } from "@mui/material"
import {Facebook, Instagram, Menu as MenuIcon, Search, Twitter} from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from "react-router-dom"


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
      const MenuItems=[
        {Id:1, Name:"Home", link:"/"},
        {Id:2, Name:"About Us", link:"/everyabout"},
        {Id:3, Name:"Portfolio", link:"#"},
        {Id:3, Name:"Blog", link:"/blog"},
        {Id:4, Name:"Contact Us", link:"#"},
      ]
    
      const [open,SetOpen]=useState(false);
      return (
        <AppBar sx={{background:'black', position:'static'}}><StyledToolbar> 
        <SocialBox sx={{cursor:'pointer'}}>
       <Facebook/>
       <Instagram/>
       <Twitter/>
        </SocialBox>
        <MenuBox sx={{display:{xs:'none',
        sm:'none', 
        md:'flex',
         lg:'flex'}}}
         >
      {MenuItems.map((item)=>(
        <Typography sx={{cursor:'pointer', fontSize:'14px'}}>{item.Name}</Typography>
      ))}
      
   
      
          
       
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
          <Box sx={{width:350, height:"90vh"}}>
    
          {MenuItems.map((item)=>(
            <MenuItem sx={{cursor:'pointer', fontSize:'14px'}}>{item.Name}</MenuItem>
          ))}
        
          </Box>
            
           
            
          </Menu>
        </AppBar>
        
      )
}

export default NavBar;
