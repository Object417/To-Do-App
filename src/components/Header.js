import {
  Alert,
  AppBar,
  Box,
  Card,
  Checkbox,
  Container,
  Grid,
  Link,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import UserCard from "./UserCard"
import { Traffic } from "@mui/icons-material"

const Header = ({ toggleThemeButton, showSnackMessage, theme }) => {
  const [author, setAuthor] = useState({})

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Object417")
      .then((res) => setAuthor(res.data))
      .catch((err) =>
        showSnackMessage(<Alert severity="error" children={err.message} />)
      )
  }, [])
  let matchesMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <AppBar position="static" sx={{ p: 2 }}>
      <Container>
        <Toolbar disableGutters>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: matchesMobile ? "center" : "flex-start",
              }}
            >
              <Traffic
                sx={{
                  fontSize: "3rem",
                }}
              />
              <Typography component="h1" variant="h3" children="To Do App" />
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: matchesMobile ? "center" : "flex-end",
              }}
            >
              <Typography variant="body1">
                by{" "}
                <Tooltip title={<UserCard user={author} />}>
                  <Link
                    href={author.html_url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      color: "#fff",
                    }}
                    children={author.login || "Author"}
                  />
                </Tooltip>
              </Typography>
              {toggleThemeButton}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
