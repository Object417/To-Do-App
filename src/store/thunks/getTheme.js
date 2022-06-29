import { lightTheme, darkTheme } from "../themes"

export const getTheme = (mode) => (mode === "light" ? lightTheme : darkTheme)
