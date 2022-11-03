import { Dialog, Paper } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import { useSelector } from "react-redux"
import AddColumnForm from "../forms/AddColumnForm"
import AddTaskForm from "../forms/AddTaskForm"

const AppModal = () => {
  const { open, variant } = useSelector((state) => state.appModal)

  let content
  switch (variant) {
    case "addTask":
      content = <AddTaskForm />
      break
    case "addColumn":
      content = <AddColumnForm />
      break
    default:
      content = null
      break
  }

  return (
    <Dialog open={open} PaperProps={{ sx: { width: "100%" } }}>
      {content}
    </Dialog>
  )
}

export default AppModal
