import { createTheme } from "@mui/material"

const themes = {}

;["light", "dark"].forEach((mode) => {
  themes[mode] = createTheme({
    palette: { mode: mode },
    components: {
      MuiButton: { defaultProps: { variant: "contained" } },
      MuiTooltip: { defaultProps: { arrow: true } }
    }
  })
})

export default themes
