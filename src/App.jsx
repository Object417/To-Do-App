import { Box, ThemeProvider } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import AppModal from "./components/modals/AppModal"
import AppHeader from "./components/header/AppHeader"
import AppMain from "./components/main/AppMain"
import themes from "./store/themes"

const App = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme.mode)
  const theme = themes[mode]

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "grid",
            gridTemplate: "auto 1fr / 1fr",
            minHeight: "100vh",
            bgcolor: "background.default",
            color: "text.primary"
          }}
        >
          <AppHeader />
          <AppMain />
          <AppModal />
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
