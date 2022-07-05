import {
  ButtonGroup,
  Icon,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material"
import {
  StarOutline,
  Star,
  CheckCircleOutline,
  RadioButtonUnchecked,
  Edit,
  Delete
} from "@mui/icons-material"
import { useDispatch } from "react-redux"
import React from "react"
import { completeTask, deleteTask, starTask } from "../../store/slices/appSlice"

const Task = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <ListItem>
      <ButtonGroup>
        <IconButton
          edge="start"
          onClick={() => dispatch(completeTask(task.id))}
        >
          {task.completed ? <CheckCircleOutline /> : <RadioButtonUnchecked />}
        </IconButton>
        <IconButton
          edge="start"
          onClick={() => dispatch(starTask(task.id))}
          color={task.starred ? "primary" : "default"}
        >
          {task.starred ? <Star /> : <StarOutline />}
        </IconButton>
      </ButtonGroup>

      <ListItemButton>
        <ListItemText
          primary={
            task.title.length > 80
              ? task.title.substring(0, 80) + "\u2026"
              : task.title
          }
          secondary={
            task.desc.length > 80
              ? task.desc.substring(0, 80) + "\u2026"
              : task.desc
          }
        />
      </ListItemButton>

      <ButtonGroup>
        <IconButton edge="end">
          <Edit />
        </IconButton>
        <IconButton
          edge="end"
          onClick={() =>
            dispatch(deleteTask({ id: task.id, columnId: task.columnId }))
          }
        >
          <Delete />
        </IconButton>
      </ButtonGroup>
    </ListItem>
  )
}

export default Task
