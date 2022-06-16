import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Grid,
  useMediaQuery,
} from "@mui/material"

export default function AddTaskForm({
  addTask,
  inputVal,
  inputOnChange,
  theme,
}) {
  let matchesMobile = useMediaQuery(theme.breakpoints.down("lg"))
  return (
    <FormControl
      component="form"
      onSubmit={addTask}
      sx={{ my: 2, width: matchesMobile ? "100%" : "33%" }}
    >
      <FormLabel children="Add a Task" />
      <Grid container spacing={2} alignItems="flex-end">
        <Grid
          item
          sx={{
            flexGrow: 1,
          }}
        >
          <TextField
            label="Task Details"
            variant="standard"
            name="content"
            value={inputVal}
            onChange={inputOnChange}
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" children="Submit" />
        </Grid>
      </Grid>
    </FormControl>
  )
}
