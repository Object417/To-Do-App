import {
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button
} from "@mui/material"
import { Box } from "@mui/system"
import { Form, Formik, Field } from "formik"
import { useDispatch } from "react-redux"
import { setOpen as setAppModalOpen } from "../../store/slices/appModalSlice"
import { addColumn } from "../../store/slices/appSlice"

const AddColumnForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        title: "",
        color: "",
        isCompletedHidden: false,
        taskOrder: []
      }}
      onSubmit={(values, actions) => {
        dispatch(addColumn({ id: `column-${Date.now()}`, ...values }))
        dispatch(setAppModalOpen(false))
      }}
    >
      {(props) => {
        console.log(props)
        return (
          <Form>
            <DialogTitle>Add Column</DialogTitle>
            <DialogContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  width: "100%",
                  my: 1
                }}
              >
                <Field as={TextField} name="title" label="Column Title" />
              </Box>
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
          </Form>
        )
      }}
    </Formik>
  )
}
export default AddColumnForm
