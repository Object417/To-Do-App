import { createTheme } from "@mui/material"

const themes = {}

;["light", "dark"].forEach((mode) => {
  themes[mode] = createTheme({
    palette: { mode: mode },
    components: {
      MuiTooltip: {
        defaultProps: {
          arrow: true,
          enterDelay: 300,
          leaveDelay: 100
        }
      },
      MuiButton: {
        defaultProps: {
          variant: "contained"
        }
      }
    }
  })
})

export default themes
