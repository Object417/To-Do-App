import { Card, CardContent, CardActionArea, Typography } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { setState as setAppModalState } from "../../store/slices/appModalSlice"

const AddColumnBtn = () => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(setAppModalState({ open: true, variant: "addColumn" }))
  }

  return (
    <Card sx={{ minWidth: "max-content" }}>
      <CardActionArea onClick={openModal}>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Add />
          <Typography sx={{ ml: 1 }}>Add column</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default AddColumnBtn
