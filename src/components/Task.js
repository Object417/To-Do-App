import { Check, Clear, Delete, Edit } from "@mui/icons-material"
import {
  Alert,
  ButtonGroup,
  ClickAwayListener,
  FormControl,
  IconButton,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material"
import { grey } from "@mui/material/colors"
import React, { useState } from "react"
import { Draggable } from "react-beautiful-dnd"

export default function Task({
  task,
  index,
  column,
  editTask,
  deleteTask,
  showSnackMessage,
  theme,
}) {
  const [isHovered, setIsHovered] = useState(false),
    [isEditing, setIsEditing] = useState(false),
    [inputVal, setInputVal] = useState(task.content)

  // Just to make the input "controllable" and avoid MUI's <TextField> visual bug
  const inputOnChange = (e) => {
    setInputVal(e.target.value)
  }

  // Cancel editing task when press the button
  const formOnReset = (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.taskContent.blur()
    setInputVal(task.content)
    setIsEditing(false)
  }

  // Save edited task
  const formOnSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (
      e.target.taskContent.value.length < 2 ||
      e.target.taskContent.value.length > 80
    ) {
      showSnackMessage(
        <Alert
          severity="error"
          children="Task content length should be in diapason 2-80"
        />
      )
      return
    }

    e.target.taskContent.blur()
    editTask(task.id, e.target.taskContent.value)
    setIsEditing(false)
  }

  // Cancel editing a task when click outside
  const formClickAway = () => {
    setInputVal(task.content)
    setIsEditing(false)
  }

  // Cancel editing a task when press Escape
  const formOnKeyDown = (e) => {
    if (e.code === "Escape") {
      formClickAway()
    }
  }

  return (
    <Draggable draggableId={task.id} index={index} type="TASK">
      {(provided, snapshot) => (
        <ListItemButton
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{
            display: "flex",
            bgcolor: snapshot.isDragging
              ? theme.palette.mode === "dark"
                ? grey[800]
                : grey[200]
              : "background.default",
            transition: `all ${theme.transitions.easing.easeIn} ${theme.transitions.duration.short}`,
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isEditing ? (
            <ClickAwayListener onClickAway={formClickAway}>
              <FormControl
                component="form"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  width: "100%",
                }}
                onReset={formOnReset}
                onSubmit={formOnSubmit}
                onKeyDown={formOnKeyDown}
              >
                <TextField
                  autoFocus
                  name="taskContent"
                  variant="standard"
                  label="Task Details"
                  value={inputVal}
                  onChange={inputOnChange}
                  sx={{}}
                />
                <ButtonGroup sx={{}}>
                  <IconButton
                    edge="end"
                    type="submit"
                    color="success"
                    children={<Check />}
                  />
                  <IconButton
                    edge="end"
                    type="reset"
                    color="error"
                    children={<Clear />}
                  />
                </ButtonGroup>
              </FormControl>
            </ClickAwayListener>
          ) : (
            <>
              <ListItemText primary={task.content} />
              <ButtonGroup
                sx={{ visibility: isHovered ? "visible" : "hidden" }}
              >
                <IconButton
                  edge="end"
                  color="primary"
                  onClick={() => setIsEditing(true)}
                  children={<Edit />}
                />
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => deleteTask(column.id, task.id)}
                  children={<Delete />}
                />
              </ButtonGroup>
            </>
          )}
        </ListItemButton>
      )}
    </Draggable>
  )
}
