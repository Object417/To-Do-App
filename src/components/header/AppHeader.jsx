import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Slide,
  useScrollTrigger
} from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import { useSelector } from "react-redux"
import themes from "../../store/themes"
import ActionButtons from "./ActionButtons"

const AppHeader = () => {
  const mode = useSelector((state) => state.theme.mode)
  const theme = themes[mode]

  const trigger = useScrollTrigger({ target: window })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="sticky">
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

            <ActionButtons />
          </Container>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default AppHeader
