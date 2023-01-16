import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import mockData from '../../mockData';
import './kanban.scss'
import CardDiv from '../component';

type Props ={};

const HomePage = (props:Props) => {
  const [data,setData] = useState(mockData);
  const onDragEnd = (result:any) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
        const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
        const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

        const sourceCol = data[sourceColIndex]
        const destinationCol = data[destinationColIndex]

        const sourceTask = [...sourceCol.tasks]
        const destinationTask = [...destinationCol.tasks]

        const [removed] = sourceTask.splice(source.index, 1)
        destinationTask.splice(destination.index, 0, removed)

        data[sourceColIndex].tasks = sourceTask
        data[destinationColIndex].tasks = destinationTask

        setData(data)
    }
}
  // const onDragEnd = (result:any) =>{
  //   // const{destination, source} = result;
  //   console.log(result)
  // }
  return (
   
    <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {
                    data.map(section => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    className='kanban__section'
                                    ref={provided.innerRef}
                                >
                                    <div className="kanban__section__title">
                                        {section.title}
                                    </div>
                                    <div className="kanban__section__content">
                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? '0.5' : '1'
                                                            }}
                                                        >
                                                            <CardDiv>
                                                                {task.title}
                                                            </CardDiv>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
         // <DragDropContext onDragEnd={onDragEnd}>
    //  <Box sx={{  
    //    display:'flex',
    //    alignItems:'center',
    //    justifyContent:'space-between'
       
    //   }
     
     
    // } >
    //   <div className="kanban">
    //     {
    //       data.map(section=>(
    //         <Droppable key={section.id}
    //         droppableId={section.id}>
    //              {(provided)=>{
    //               <div {...provided.droppableProps}
    //               className="kanban__section"
    //               ref={provided.innerRef}
    //               >
    //                 <div className='kanban__section__title'>
    //                    {section.title}
    //                 </div>

    //               </div>
    //              }}
    //         </Droppable>
    //       ))
    //     }
    //   </div>
    //   {/* {state.columnOrder.map((columnId) => {
    //     const column = state.columns[columnId];
    //     const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
    //     return <Box key={column.id} sx={{
    //       width:'32.7%',
    //       height:300,
    //       borderRadius:1,
    //       backgroundColor: colorConfigs.sidebar.activeBg,
         
    //     }}>   </Box>
    //   })} */}
      
    //     <Box sx={{
    //     width:'32.7%',
    //     height:300,
    //     borderRadius:1,
    //     backgroundColor: colorConfigs.sidebar.activeBg,
       
    //   }}>
        
    //     </Box>
    //     <Box sx={{
    //     width:'32.7%',
    //     height:300,
    //     borderRadius:1,
    //     backgroundColor: colorConfigs.sidebar.activeBg,
       
    //   }}>
      
    //     </Box>
    //     <Box sx={{
    //     width:'32.7%',
    //     height:300,
    //     borderRadius:1,
    //     backgroundColor: colorConfigs.sidebar.activeBg,
       
    //   }}>
    
    //     </Box>
    // </Box>
    
    // </DragDropContext>
  )
}

// const initalData = {
//      tasks:{
//       1:{id:1, content:"oke"},
//       2:{id:2, content:"oke2"},
//       3:{id:3, content:"oke3"},
      
//      },
//      columns:{
//       "column-1":{
//         id:"column-1",
//         title: "T0-D0",
//         taskIds:[1,2,3,4],
//       },
      
//       "column-2":{
//         id:"column-2",
//         title: "T0-D0",
//         taskIds:[]
//       },
//       "column-3":{
//         id:"column-3",
//         title: "T0-D0",
//         taskIds:[]
//       },
     
//      },
//      columnOrder:["column-1", "column-2", "column-3"],
// }

export default HomePage