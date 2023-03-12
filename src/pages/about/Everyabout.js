import { Box } from '@mui/material'
import React from 'react'
import About from './About'
import Whoweare from './Whoweare'
import Ourmision from './Ourmision'
import Whatwedo from './Whatwedo'

const Everyabout = () => {
  return (
    <Box>
    <Whoweare/>
      <About/>
      <Ourmision/>
      <Whatwedo/>
      
    </Box>
  )
}

export default Everyabout
