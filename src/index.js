import React, { StrictMode, useState, useMemo, useEffect } from "react"
import * as ReactDOM from "react-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Box,
  Container,
  Snackbar,
  Checkbox,
  IconButton,
  darkScrollbar,
} from "@mui/material"
import Header from "./components/Header"
import "./App.css"
import ToDo from "./ToDo"
import { DarkMode, LightMode } from "@mui/icons-material"

const App = () => {
  /* There're some troubles with using useMediaQuery("(prefers-color-scheme: dark)")
     'cause it returns the right value only at the second render.
     So to use it I have to put it into React's useEffect or useMemo to automatically
     update the state and then display the app with the preferred color scheme */
  const [onLoadMode, setOnLoadMode] = useState(
      window.localStorage.getItem("colorMode") || "light"
    ),
    [mode, setMode] = useState(onLoadMode),
    theme = useMemo(
      () =>
        createTheme({
          palette: { mode: mode },
        }),
      [mode]
    )

  // Save color mode setting
  useEffect(() => {
    window.localStorage.setItem("colorMode", mode)
  }, [mode])

  // Toggle the color mode
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light")
  }

  // Button for toggling the color mode
  const toggleThemeButton = (
    <IconButton
      onClick={toggleTheme}
      children={mode === "light" ? <LightMode /> : <DarkMode />}
    />
  )

  // Snackbar state
  const [snackOpen, setSnackOpen] = useState(false),
    [snackContent, setSnackContent] = useState(null)

  const showSnackMessage = (content) => {
    setSnackOpen(true)
    setSnackContent(content)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="app"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        <Header
          toggleThemeButton={toggleThemeButton}
          showSnackMessage={showSnackMessage}
          theme={theme}
        />
        <Box
          component="main"
          sx={{
            mt: 2,
          }}
        >
          <Container
            children={
              <ToDo theme={theme} showSnackMessage={showSnackMessage} />
            }
          />
        </Box>
      </Box>
      <Snackbar
        open={snackOpen}
        onClose={() => setSnackOpen(false)}
        autoHideDuration={5000}
        children={snackContent}
      />
    </ThemeProvider>
  )
}

ReactDOM.render(
  <StrictMode>
    <CssBaseline enableColorScheme={true} />
    <App />
  </StrictMode>,
  document.querySelector("#root")
)
