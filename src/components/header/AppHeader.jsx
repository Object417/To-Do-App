import { AppBar, Toolbar, Typography, Box } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTheme } from "../../store/thunks/getTheme"
import HeaderActionButtons from "./HeaderActionButtons"

const AppHeader = () => {
  const mode = useSelector((state) => state.theme.mode)
  const theme = getTheme(mode)

  return (
    <AppBar className="AppHeader">
      <Toolbar>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="./logo.svg"
            alt="logo"
            sx={{ maxWidth: theme.typography.h4.fontSize }}
          />

          <Typography variant="h4" component="h1">
            To Do App
          </Typography>

          <HeaderActionButtons />
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
