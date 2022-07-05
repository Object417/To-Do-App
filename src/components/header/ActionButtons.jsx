import React from "react"
import { Add, DarkMode, ImportExport, LightMode } from "@mui/icons-material"
import { IconButton, List, ListItem, Tooltip } from "@mui/material"
import { toggleMode } from "../../store/slices/themeSlice"
import { useSelector, useDispatch } from "react-redux"
import { setState as setAppModalState } from "../../store/slices/appModalSlice"

const ActionButtons = () => {
  const mode = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()
  const actionButtons = [
    {
      action: () => {
        // Show modal with <AddTaskForm>
        dispatch(setAppModalState({ open: true, variant: "addTask" }))
      },
      icon: { light: <Add />, dark: <Add /> },
      tooltip: "Add task"
    },
    {
      action: () => {
        // Show modal with <ImportExportForm>
      },
      icon: { light: <ImportExport />, dark: <ImportExport /> },
      tooltip: "Import/Export tasks as JSON"
    },
    {
      action: () => dispatch(toggleMode()),
      icon: { light: <LightMode />, dark: <DarkMode /> },
      tooltip: "Toggle mode"
    }
  ]

  return (
    <List dense sx={{ ml: "auto", display: "flex" }}>
      {actionButtons.map((elem, index) => (
        <Tooltip
          key={"headerAction" + index}
          title={elem.tooltip}
          enterDelay={300}
          leaveDelay={100}
          arrow
        >
          <ListItem disablePadding>
            <IconButton onClick={elem.action} sx={{ color: "#fff" }}>
              {mode === "light" ? elem.icon.light : elem.icon.dark}
            </IconButton>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  )
}

export default ActionButtons
