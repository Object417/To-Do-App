import { Box, List, Typography, Container, Grid } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import Column from "./Column"

const AppMain = () => {
  const appState = useSelector((state) => state.app)
  const { columnOrder, columns, tasks } = appState

  return (
    <Box component="main" sx={{ py: 2, maxWidth: "100%", overflow: "scroll" }}>
      <Grid container gap={2} sx={{ px: 8, flexWrap: "nowrap" }}>
        {columnOrder.map((columnId, index) => {
          const columnTasks = columns[columnId].taskOrder.map(
            (taskId) => tasks[taskId]
          )
          return (
            <Column
              key={columnId}
              column={columns[columnId]}
              tasks={columnTasks}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

export default AppMain
