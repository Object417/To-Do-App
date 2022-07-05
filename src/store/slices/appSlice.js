import { createSlice } from "@reduxjs/toolkit"
import initialState from "../appInitialState.json"

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks[payload.id] = payload // Add the task to the all tasks object
      state.columns[payload.columnId].taskOrder.push(payload.id) // And also to the column
    },
    editTask: (state, { payload }) => {
      state.tasks[payload.id] = payload // Just replace with the new one
    },
    starTask: (state, { payload }) => {
      state.tasks[payload].starred = !state.tasks[payload].starred // Toggle starred property
    },
    completeTask: (state, { payload }) => {
      state.tasks[payload].completed = !state.tasks[payload].completed // Toggle completed property
    },
    deleteTask: (state, { payload }) => {
      delete state.tasks[payload.id] // Remove the task from the task list
      state.columns[payload.columnId].taskOrder = state.columns[
        payload.columnId
      ].taskOrder.filter((taskId) => taskId !== payload.id) // And also remove from the column's taskOrder
    }
  }
})

export const { addTask, editTask, starTask, completeTask, deleteTask } =
  appSlice.actions
export default appSlice.reducer
