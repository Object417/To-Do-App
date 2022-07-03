import { configureStore } from "@reduxjs/toolkit"
import appModalSlice from "./slices/appModalSlice"
import appSlice from "./slices/appSlice"
import themeSlice from "./slices/themeSlice"

const store = configureStore({
  reducer: {
    theme: themeSlice,
    app: appSlice,
    appModal: appModalSlice
  }
})

export default store
