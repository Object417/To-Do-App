import React from "react"
import { DarkMode, ImportExport, LightMode } from "@mui/icons-material"
import { Box, IconButton, Tooltip } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { modeSelector, toggleMode } from "../../store/slices/themeSlice"

const ActionButtons = () => {
  console.log("<ActionButtons> render")
  const mode = useSelector(modeSelector)
  const dispatch = useDispatch()

  const actionButtons = [
    {
      action: () => {},
      icon: { light: <ImportExport />, dark: <ImportExport /> },
      tooltip: "Import/Export tasks as JSON"
    },
    {
      action: () => {
        dispatch(toggleMode())
      },
      icon: { light: <LightMode />, dark: <DarkMode /> },
      tooltip: "Toggle mode"
    }
  ]

  return (
    <Box sx={{ ml: "auto" }}>
      {actionButtons.map((actionButton, index) => (
        // HAB - Header Action Button
        <Tooltip title={actionButton.tooltip} key={`HAB${index}`}>
          <IconButton
            onClick={actionButton.action}
            sx={{ color: "common.white" }}
            edge="end"
          >
            {actionButton.icon[mode]}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
export default ActionButtons
