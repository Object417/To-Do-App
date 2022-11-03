import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  Tooltip
} from "@mui/material"
import {
  CheckCircleOutline,
  RadioButtonUnchecked,
  Star,
  StarOutline
} from "@mui/icons-material"
import { useFormik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { setOpen as setAppModalOpen } from "../../store/slices/appModalSlice"
import { addTask } from "../../store/slices/appSlice"
import { DesktopDatePicker } from "@mui/x-date-pickers"
import { useSelector } from "react-redux"
import moment from "moment"
import themes from "../../store/themes"

const AddTaskForm = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.app)
  const mode = useSelector((state) => state.theme.mode)

  const theme = themes[mode]

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      completed: false,
      starred: false,
      date: moment().valueOf(),
      columnId: state.columns[Object.keys(state.columns)[0]]?.id || null,
      color: ""
    },
    onSubmit: (values) => {
      dispatch(
        addTask({
          id: moment().valueOf(),
          ...values
        })
      )
      dispatch(setAppModalOpen(false))
    }
  })

  return (
    <>
      <Box component="form" id="addTaskForm" onSubmit={formik.handleSubmit}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              width: "100%",
              my: 1
            }}
          >
            <Tooltip title="Mark as completed">
              <Checkbox
                id="completed"
                name="completed"
                checked={formik.values.completed}
                onChange={formik.handleChange}
                icon={<RadioButtonUnchecked />}
                checkedIcon={<CheckCircleOutline />}
                sx={{ ml: "-12px" }}
              />
            </Tooltip>
            <Tooltip title="Mark as starred">
              <Checkbox
                id="starred"
                name="starred"
                checked={formik.values.starred}
                onChange={formik.handleChange}
                icon={<StarOutline />}
                checkedIcon={<Star />}
                sx={{ ml: "-12px" }}
              />
            </Tooltip>

            <TextField
              id="title"
              name="title"
              type="text"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              sx={{ flexGrow: 1, mr: 1 }}
            />
            <Select
              id="columnId"
              name="columnId"
              value={formik.values.columnId}
              onChange={formik.handleChange}
            >
              {state.columnOrder.map((columnId, index) => (
                <MenuItem key={"option" + columnId} value={columnId}>
                  {state.columns[columnId].title}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <TextField
            id="desc"
            name="desc"
            type="text"
            label="Description"
            value={formik.values.desc}
            onChange={formik.handleChange}
            fullWidth
            multiline
            rows={2}
            sx={{ mb: 1 }}
          />

          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <DesktopDatePicker
              id="date"
              name="date"
              label="Date"
              inputFormat="DD/MM/yyyy"
              value={formik.values.date}
              onChange={(value) =>
                formik.setFieldValue("date", value ? value.valueOf() : null)
              }
              renderInput={(params) => <TextField {...params} />}
              sx={{ flexGrow: 1 }}
            />

            <Box
              sx={{
                aspectRatio: "1/1",
                objectFit: "contain",
                bgcolor: formik.values.color,
                borderRadius: "50%",
                border: `1px solid ${theme.palette.action.disabled}`,
                alignSelf: "center",
                mx: 1,
                flexGrow: 1.5,
                "&:hover": {
                  border: `1px solid ${theme.palette.action.active}`
                }
              }}
            />
            <TextField
              name="color"
              id="color"
              label="Color"
              placeholder="#51eba6"
              value={formik.values.color}
              onChange={formik.handleChange}
              sx={{ flexGrow: 1 }}
            />
          </Box>

          <Button
            sx={{ display: "none" }}
            hidden
            type="submit"
            id="addTaskFormBtn"
          ></Button>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => dispatch(setAppModalOpen(false))}
          >
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Box>
    </>
  )
}

export default AddTaskForm
