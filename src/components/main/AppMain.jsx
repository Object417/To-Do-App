import {
  Box,
  List,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent
} from "@mui/material"
import { useSelector } from "react-redux"
import AddColumnBtn from "./AddColumnBtn"
import Column from "./Column"

const AppMain = () => {
  const appState = useSelector((state) => state.app)
  const { columnOrder, columns, tasks } = appState

  return (
    <Box component="main" sx={{ p: 2, maxWidth: "100%", overflowX: "auto" }}>
      <Grid
        container
        gap={2}
        sx={{
          flexWrap: "nowrap",
          width: "fit-content",
          alignItems: "flex-start"
        }}
      >
        {columnOrder.map((columnId, index) => {
          const column = columns[columnId]
          const columnTasks = columns[columnId].taskOrder.map(
            (taskId) => tasks[taskId]
          )
          return <Column key={columnId} column={column} tasks={columnTasks} />
        })}
        <AddColumnBtn />
      </Grid>
    </Box>
  )
}

export default AppMain
