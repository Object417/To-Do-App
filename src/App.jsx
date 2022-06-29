import { Box, ThemeProvider } from "@mui/material"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import AppHeader from "./components/header/AppHeader"
import { getTheme } from "./store/thunks/getTheme"

const App = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme.mode)
  const theme = getTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary"
        }}
      >
        <AppHeader />
      </Box>
    </ThemeProvider>
  )
}

export default App
