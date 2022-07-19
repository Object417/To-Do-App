import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material"
import ActionButtons from "./ActionButtons"
import { setMode } from "../../store/slices/themeSlice"

const Header = () => {
  console.log("<Header> render")

  // Not sure about this
  const dispatch = useDispatch()
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  useEffect(() => {
    prefersDarkMode && dispatch(setMode("dark"))
  }, [])

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography component="h1" variant="h4">
          To Do App
        </Typography>
        <ActionButtons />
      </Toolbar>
    </AppBar>
  )
}
export default Header
