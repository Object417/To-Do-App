import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tasks: {
    task1: {
      id: "task1",
      columnId: "column1",
      title: "Task title",
      desc: "Task description",
      completed: false,
      starred: false
    }
  },
  columns: {
    column1: {
      id: "column1",
      title: "Column title",
      taskOrder: ["task1"]
    }
  },
  columnOrder: ["column1"]
}

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addColumn: (state, { payload }) => {
      state.columns[payload.id] = payload
      state.columnOrder.push(payload.id)
    },
    removeColumn: (state, { payload }) => {
      delete state.columns[payload.id]
      state.columnOrder = state.columnOrder.filter(
        (columnId) => columnId !== payload.id
      )
    },
    editColumn: (state, { payload }) => {
      state.columns[payload.id] = payload
    },
    addTask: (state, { payload }) => {
      state.tasks[payload.id] = payload
      state.columns[payload.columnId].taskOrder.push(payload.id)
    },
    removeTask: (state, { payload }) => {
      delete state.tasks[payload.id]
      state.columns[payload.columnId].taskOrder = state.columns[
        payload.columnId
      ].taskOrder.filter((taskId) => taskId !== payload.id)
    },
    editTask: (state, { payload }) => {
      state.tasks[payload.id] = payload
    },
    toggleCompleteTask: (state, { payload }) => {
      state.tasks[payload.id].completed = !state.tasks[payload.id].completed
    },
    toggleStarTask: (state, { payload }) => {
      state.tasks[payload.id].starred = !state.tasks[payload.id].starred
    }
  }
})

export const todoSelector = (state) => state.todo
export const {
  addColumn,
  removeColumn,
  editColumn,
  addTask,
  removeTask,
  editTask,
  toggleCompleteTask,
  toggleStarTask
} = todoSlice.actions
export default todoSlice.reducer
