import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    setMode: (state, { payload }) => {
      state.mode = payload
    },
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    }
  }
})

export const modeSelector = (state) => state.theme.mode
export const { setMode, toggleMode } = themeSlice.actions
export default themeSlice.reducer
