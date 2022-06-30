import { createSlice } from "@reduxjs/toolkit"
import initialState from "../appInitialState.json"

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks[payload.id] = payload // Add the task to the all tasks object
      state.columns[payload.columnId].taskOrder.push(payload.id) // And also to the column
    }
  }
})

export const { addTask } = appSlice.actions
export default appSlice.reducer
