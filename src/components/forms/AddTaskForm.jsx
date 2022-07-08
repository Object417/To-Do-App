import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  ListItem,
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
import { ChromePicker, SketchPicker, TwitterPicker } from "react-color"
import moment from "moment"

const AddTaskForm = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.app)

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      completed: false,
      starred: false,
      date: /* moment().valueOf() */ null,
      columnId: state.columns[Object.keys(state.columns)[0]]?.id || null
      // color: ""
    },
    onSubmit: (values) => {
      dispatch(
        addTask({
          id: moment().valueOf(),
          columnId: "column-2",
          ...values
        })
      )
      dispatch(setAppModalOpen(false))
    }
  })

  return (
    <>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <Box component="form" id="addTaskForm" onSubmit={formik.handleSubmit}>
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
              // sx={{ flexGrow: 1 }}
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

          <DesktopDatePicker
            id="date"
            name="date"
            label="Date"
            inputFormat="DD/MM/yyyy"
            value={formik.values.date}
            onChange={(value) => {
              console.log(value)
              formik.setFieldValue("date", value ? value.valueOf() : null)
            }}
            // onChange={(value) => console.log(value)}
            renderInput={(params) => <TextField {...params} />}
          />
          {/* <TwitterPicker
            id="color"
            name="color"
            color={formik.values.color}
            // onChange={(value) => console.log(value)}
            onChange={(value) => formik.setFieldValue("color", value.hex)}
          /> */}

          <Button
            sx={{ display: "none" }}
            hidden
            type="submit"
            id="addTaskFormBtn"
          ></Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => dispatch(setAppModalOpen(false))}
        >
          Cancel
        </Button>
        <Button
          // Yeah, bro!
          onClick={() => document.querySelector("#addTaskFormBtn").click()}
        >
          Submit
        </Button>
      </DialogActions>
    </>
  )
}

export default AddTaskForm
