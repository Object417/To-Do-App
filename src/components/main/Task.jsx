import { ListItemButton, ListItemText } from "@mui/material"
import React from "react"

const Task = ({ task }) => {
  return (
    <ListItemButton>
      <ListItemText primary={task.title} secondary={task.desc} />
    </ListItemButton>
  )
}

export default Task
