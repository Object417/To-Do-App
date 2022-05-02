import {
  Alert,
  Box,
  Card,
  Checkbox,
  Container,
  Grid,
  Link,
  Tooltip,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import UserCard from "./UserCard"
import { Traffic } from "@mui/icons-material"

const Header = ({ toggleThemeButton, showSnackMessage }) => {
  const [author, setAuthor] = useState({})

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Object417")
      .then((res) => setAuthor(res.data))
      .catch((err) =>
        showSnackMessage(<Alert severity="error" children={err.message} />)
      )
  }, [])

  return (
    <Box component="header" sx={{ p: 2 }}>
      <Container>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Traffic fontSize="large" />
            <Typography component="h1" variant="h3" children="To Do App" />
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="body1">
              by{" "}
              <Tooltip title={<UserCard user={author} />}>
                <Link
                  href={author.html_url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  children={author.login || "Author"}
                />
              </Tooltip>
            </Typography>
            {toggleThemeButton}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Header
