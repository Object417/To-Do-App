import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./slices/appSlice"
import themeSlice from "./slices/themeSlice"

const store = configureStore({
  reducer: {
    theme: themeSlice,
    app: appSlice
  }
})

export default store
