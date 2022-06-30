import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  Typography
} from "@mui/material"
import React from "react"
import Task from "./Task"

const Column = ({ column, tasks }) => {
  console.log(tasks)

  return (
    <Card className={column.id} sx={{ maxWidth: "100rem", minWidth: "50rem" }}>
      <CardHeader title={column.title} subheader="2 days ago" />
      <CardContent sx={{ pt: 0 }}>
        <List dense sx={{ p: 0 }}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default Column
