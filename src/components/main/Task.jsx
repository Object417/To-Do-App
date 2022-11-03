import {
  ButtonGroup,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip
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
        <Tooltip title="Mark as completed">
          <IconButton
            edge="start"
            onClick={() => dispatch(completeTask(task.id))}
          >
            {task.completed ? <CheckCircleOutline /> : <RadioButtonUnchecked />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Mark as starred">
          <IconButton
            edge="start"
            onClick={() => dispatch(starTask(task.id))}
            color={task.starred ? "primary" : "default"}
          >
            {task.starred ? <Star /> : <StarOutline />}
          </IconButton>
        </Tooltip>
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
        <Tooltip title="Edit the task">
          <IconButton edge="end">
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete the task (no confirmation)">
          <IconButton
            edge="end"
            onClick={() =>
              dispatch(deleteTask({ id: task.id, columnId: task.columnId }))
            }
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </ListItem>
  )
}

export default Task
