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
  theme,
}) => {
  return (
    <Draggable draggableId={column.id} index={index} type="COLUMN">
      {(provided) => (
        <Grid
          component={List}
          dense={true}
          item
          lg={4}
          xs={12}
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
          sx={{
            display: "grid",
            gridTemplateRows: "auto 1fr",
            transition: `all ${theme.transitions.duration.short} ${theme.transitions.easing.easeIn}`,
          }}
        >
          <ListSubheader
            {...provided.dragHandleProps}
            disableGutters
            sx={{
              bgcolor: column.bgColor + ".light",
              color: "#000",
              px: 2,
              py: 1,
              borderRadius: 1,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              // top: 100,
            }}
            children={<Typography variant="h6">{column.title}</Typography>}
          />
          <Droppable droppableId={column.id} type="TASK">
            {(provided, snapshot) => (
              <Box
                className="tasksList"
                {...provided.draggableProps}
                ref={provided.innerRef}
                sx={{
                  bgcolor: snapshot.isDraggingOver
                    ? theme.palette.mode === "dark"
                      ? grey[900]
                      : grey[300]
                    : "background.default",
                  border: 1,
                  borderTop: 0,
                  borderRadius: 1,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  minHeight: "56px",
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
                    theme={theme}
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
