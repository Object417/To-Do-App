import Task from "./Task"
import {
  CardHeader,
  Grid,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material"
import { Add } from "@mui/icons-material"

const Column = ({ column, tasks }) => {
  console.log(column, tasks)

  return (
    <Grid item>
      <Card sx={{ minWidth: "30rem" }}>
        <CardHeader title={column.title} />
        <CardContent sx={{ pt: 0 }}>
          <List dense sx={{ p: 0 }}>
            {tasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}

            <ListItemButton
              onClick={() => {
                console.log("Show <AddTaskModal>")
              }}
            >
              <Add />
              <Typography
                sx={{ color: "text.secondary", ml: 1 }}
                variant="body"
              >
                Add a new task
              </Typography>
            </ListItemButton>
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Column
