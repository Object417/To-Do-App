import { Dialog } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import AddTaskForm from "../forms/AddTaskForm"

const AppModal = () => {
  const { open, variant } = useSelector((state) => state.appModal)

  let content
  switch (variant) {
    case "addTask":
      content = <AddTaskForm />
      break
    default:
      content = null
      break
  }

  return <Dialog open={open}>{content}</Dialog>
}

export default AppModal
