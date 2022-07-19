import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import Header from "./components/Header/Header"
import { modeSelector } from "./store/slices/themeSlice"
import themes from "./store/themes"

const App = () => {
  const mode = useSelector(modeSelector)
  const theme = themes[mode]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}

export default App
