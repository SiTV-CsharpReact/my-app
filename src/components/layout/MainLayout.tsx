import { Box, Toolbar } from '@mui/material'
import React from 'react'
import Topbar from '../common/Topbar'
import sizeConfigs from "../../configs/sizeConfigs"
import Sidebar from '../common/Sidebar'
import colorConfigs from '../../configs/colorConfigs'
import { Outlet } from 'react-router-dom'
type Props = {}

const MainLayout = (props: Props) => {
  return (
    <Box sx={{display:"flex"}}>
     <Topbar/>
      <Box component="nav" sx={{width: sizeConfigs.sidebar.width,
      flexShrink:0
      
      }}>
      <Sidebar/>
      </Box>
       <Box 
       component="main"
       sx={{
        flexGrow:1,
        p:3,
        width:`calc(100% - ${sizeConfigs.sidebar.width})`,
        minHeight:"100vh",
        background:colorConfigs.mainBg
       }}
       
       >
       <Toolbar sx={{minHeight:'40px !important'}}/>
       <Outlet/>
       </Box>
    </Box>
  )
}

export default MainLayout