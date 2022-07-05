import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material"
import { useFormik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { setOpen as setAppModalOpen } from "../../store/slices/appModalSlice"
import { addTask } from "../../store/slices/appSlice"

const AddTaskForm = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: ""
    },
    onSubmit: (values) => {
      dispatch(
        addTask({
          id: Date.now(),
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
          <TextField
            id="title"
            name="title"
            type="text"
            variant="standard"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            fullWidth
            autoFocus
          />
          <TextField
            id="desc"
            name="desc"
            type="text"
            variant="standard"
            label="Description"
            value={formik.values.desc}
            onChange={formik.handleChange}
            fullWidth
          />
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
          variant="contained"
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
