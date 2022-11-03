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
    },
    addColumn: (state, { payload }) => {
      state.columns[payload.id] = payload // Add the column to all the columns
      state.columnOrder.push(payload.id) // Also add it to the render queue
    },
    editColumn: (state, { payload }) => {
      state.columns[payload.id] = payload // Just replace with the new one
    },
    deleteColumn: (state, { payload }) => {
      state.columns[payload.id].taskOrder.forEach((taskId) => {
        delete state.tasks[taskId]
      }) // Delete all the tasks in the column
      delete state.columns[payload.id] // Delete the column itself
      state.columnOrder = state.columnOrder.filter(
        (columnId) => columnId !== payload.id
      ) // Delete the column from the render queue
    }
  }
})

export const {
  addTask,
  editTask,
  starTask,
  completeTask,
  deleteTask,
  addColumn,
  editColumn,
  deleteColumn
} = appSlice.actions
export default appSlice.reducer
