import { Delete, Edit } from "@mui/icons-material"
import {
  Box,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography
} from "@mui/material"
import React from "react"
import Task from "./Task"
import { useDispatch } from "react-redux"
import { deleteColumn } from "../../store/slices/appSlice"

const Column = ({ column, tasks }) => {
  const dispatch = useDispatch()

  return (
    <Card sx={{ width: "30rem" }}>
      <CardHeader
        title={column.title}
        subheader="2 days ago"
        action={
          <ButtonGroup>
            <Tooltip title="Edit column">
              <IconButton edge="end">
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete column">
              <IconButton
                edge="end"
                onClick={() => dispatch(deleteColumn({ id: column.id }))}
                sx={{ mr: 0 }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <List dense sx={{ p: 0 }}>
          {tasks.length ? (
            tasks.map((task) => <Task key={task.id} task={task} />)
          ) : (
            <ListItem>
              <ListItemText
                primary="No tasks here yet"
                primaryTypographyProps={{ color: "text.secondary" }}
              />
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  )
}

export default Column
