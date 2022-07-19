import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/themeSlice"
import todoSlice from "./slices/todoSlice"

const store = configureStore({
  reducer: {
    theme: themeSlice,
    todo: todoSlice
  }
})

export default store
