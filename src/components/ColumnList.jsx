import { Add } from "@mui/icons-material"
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography
} from "@mui/material"
import { useSelector } from "react-redux"
import { todoSelector } from "../store/slices/todoSlice"
import Column from "./Column"

const ColumnList = () => {
  const { tasks, columns, columnOrder } = useSelector(todoSelector)

  return (
    <Grid container sx={{ p: 3 }} gap={2}>
      {columnOrder.map((columnId) => {
        const column = columns[columnId]
        const columnTasks = column.taskOrder.map((taskId) => tasks[taskId])
        return (
          <Grid item key={column.id}>
            <Column column={column} tasks={columnTasks} />
          </Grid>
        )
      })}
      <Grid item>
        <Card sx={{ minWidth: "20rem" }}>
          <CardActionArea
            onClick={() => {
              console.log("Show <AddColumnModal>")
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Add />
              <Typography
                sx={{ color: "text.secondary", ml: 1 }}
                variant="body1"
              >
                Add a new column
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}
export default ColumnList
