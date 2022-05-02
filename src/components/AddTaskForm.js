import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Grid,
} from "@mui/material"

export default function AddTaskForm({ addTask, inputVal, inputOnChange }) {
  return (
    <FormControl component="form" onSubmit={addTask} sx={{ my: 2 }}>
      <FormLabel children="Add a Task" />
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item>
          <TextField
            label="Task Details"
            variant="standard"
            name="content"
            value={inputVal}
            onChange={inputOnChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" children="Submit" />
        </Grid>
      </Grid>
    </FormControl>
  )
}
