import { Typography, Box, Grid, List, ListSubheader } from "@mui/material"
import { blue, grey } from "@mui/material/colors"
import { Draggable, Droppable } from "react-beautiful-dnd"
import Task from "./Task"

const Column = ({
  column,
  index,
  tasks,
  editTask,
  deleteTask,
  showSnackMessage,
}) => {
  return (
    <Draggable draggableId={column.id} index={index} type="COLUMN">
      {(provided) => (
        <Grid
          component={List}
          item
          lg={4}
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
          sx={{
            display: "grid",
            gridTemplateRows: "auto 1fr",
          }}
        >
          <ListSubheader
            {...provided.dragHandleProps}
            sx={{
              bgcolor: column.bgColor + ".light",
              color: "#000",
              borderRadius: 1,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
            children={column.title}
          />
          <Droppable droppableId={column.id} type="TASK">
            {(provided, snapshot) => (
              <Box
                className="tasksList"
                {...provided.draggableProps}
                ref={provided.innerRef}
                sx={{
                  bgcolor: snapshot.isDraggingOver
                    ? grey[300]
                    : "background.default",
                  border: 1,
                  borderTop: 0,
                  borderRadius: 1,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  maxHeight: "25rem",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
              >
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    column={column}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    showSnackMessage={showSnackMessage}
                  />
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Grid>
      )}
    </Draggable>
  )
}

export default Column
