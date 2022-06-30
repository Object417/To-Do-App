import { createTheme } from "@mui/material"

export const lightTheme = createTheme({ palette: { mode: "light" } })
export const darkTheme = createTheme({ palette: { mode: "dark" } })

export const getTheme = (mode) => (mode === "light" ? lightTheme : darkTheme)
