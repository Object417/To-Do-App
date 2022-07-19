import {
  CheckCircleOutline,
  Edit,
  Delete,
  RadioButtonUnchecked,
  Star,
  StarOutline
} from "@mui/icons-material"
import {
  ButtonGroup,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip
} from "@mui/material"
import { useDispatch } from "react-redux"
import { toggleCompleteTask, toggleStarTask } from "../store/slices/todoSlice"

const Task = ({ task }) => {
  const dispatch = useDispatch()

  const quickActions = [
    {
      action: () => {
        dispatch(toggleCompleteTask({ id: task.id }))
      },
      icon: task.completed ? <CheckCircleOutline /> : <RadioButtonUnchecked />,
      title: "Mark as completed"
    },
    {
      action: () => {
        dispatch(toggleStarTask({ id: task.id }))
      },
      icon: task.starred ? <Star color="primary" /> : <StarOutline />,
      title: "Mark as important"
    }
  ]

  const additionalQuickActions = [
    {
      action: () => {},
      icon: <Edit />,
      title: "Edit the task"
    },
    {
      action: () => {},
      icon: <Delete />,
      title: "Delete the task (no confirmation)"
    }
  ]

  return (
    <ListItem>
      <ButtonGroup>
        {quickActions.map((quickAction, index) => (
          // TAB - Task Action Button
          <Tooltip title={quickAction.title} key={`TAB${index}`}>
            <IconButton edge="start" onClick={quickAction.action}>
              {quickAction.icon}
            </IconButton>
          </Tooltip>
        ))}
      </ButtonGroup>

      <ListItemButton
        onClick={() => {
          console.log("Show <TaskDetailsModal>")
        }}
      >
        <ListItemText primary={task.title} secondary={task.desc} />
      </ListItemButton>

      <ButtonGroup>
        {additionalQuickActions.map((quickAction, index) => (
          // ATAB - Additional Task Action Button
          <Tooltip title={quickAction.title} key={`ATAB${index}`}>
            <IconButton edge="end" onClick={quickAction.action}>
              {quickAction.icon}
            </IconButton>
          </Tooltip>
        ))}
      </ButtonGroup>
    </ListItem>
  )
}
export default Task
