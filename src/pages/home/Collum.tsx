import { Box } from '@mui/material'
import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import colorConfigs from '../../configs/colorConfigs'

const Collum = () => {
  return (
 <>
 <Droppable droppableId="2">
   {(droppableProvided, droppableSnapshot )=>(
     <Box sx={{
        width:'32.7%',
        height:300,
        borderRadius:1,
        backgroundColor: colorConfigs.sidebar.activeBg,
        
  
      }}>
        
        </Box>
   )}
 </Droppable>
 </>
  )
}

export default Collum