const { createSlice } = require("@reduxjs/toolkit")

const appModalSlice = createSlice({
  name: "appModal",
  initialState: {
    open: false,
    variant: null
  },
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload
    },
    setState: (state, { payload }) => payload
  }
})

export const { setOpen, setState } = appModalSlice.actions
export default appModalSlice.reducer
