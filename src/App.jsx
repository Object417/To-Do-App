import { Box, ThemeProvider } from "@mui/material"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import AppHeader from "./components/header/AppHeader"
import AppMain from "./components/main/AppMain"
import { getTheme } from "./store/themes"

const App = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme.mode)
  const theme = getTheme(mode)

  return (
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
      </Box>
    </ThemeProvider>
  )
}

export default App
