import React, { useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Alert,
  useMediaQuery,
} from "@mui/material"
import initialData from "./initialData"
import Column from "./components/Column"
import AddTaskForm from "./components/AddTaskForm"
import { grey } from "@mui/material/colors"

let id = 7

const ToDo = ({ showSnackMessage, theme }) => {
  // Main state
  const [data, setData] = useState(initialData)

  // What to do when item is dropped
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    // Dropped outside the list
    if (!destination) {
      return
    }
    // Dropped at the start position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === "COLUMN") {
      const newColumnOrder = [...data.columnOrder]

      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      setData({ ...data, columnOrder: newColumnOrder })

      return
    }

    // Reorder tasks in a column
    if (destination.droppableId === source.droppableId) {
      const column = data.columns[source.droppableId],
        newTaskIds = Array.from(column.taskIds)

      // Remove the item at the old index...
      newTaskIds.splice(source.index, 1)
      // ...and insert with the new index
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = { ...column, taskIds: newTaskIds }
      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      })
      // Moving tasks between columns
    } else {
      const startColumn = data.columns[source.droppableId],
        endColumn = data.columns[destination.droppableId],
        newStartTaskIds = Array.from(startColumn.taskIds),
        newEndTaskIds = Array.from(endColumn.taskIds)

      newStartTaskIds.splice(source.index, 1)
      newEndTaskIds.splice(destination.index, 0, draggableId)

      const newStartColumn = { ...startColumn, taskIds: newStartTaskIds },
        newEndColumn = { ...endColumn, taskIds: newEndTaskIds }

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        },
      })
    }
  }

  // Place a new task to the "To Do" column
  const addTask = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const taskContent = inputVal.trim()

    if (
      /^\s*$/.test(taskContent) ||
      taskContent.length < 2 ||
      taskContent.length > 80
    ) {
      showSnackMessage(
        <Alert
          severity="error"
          children="Task content length should be in diapason 2-80"
        />
      )
      return
    }

    id++

    setData({
      ...data,
      tasks: {
        ...data.tasks,
        [`task${id}`]: { id: `task${id}`, content: taskContent },
      },
      columns: {
        ...data.columns,
        todo: {
          ...data.columns.todo,
          taskIds: [...data.columns.todo.taskIds, `task${id}`],
        },
      },
    })
    setInputVal("")
  }

  const editTask = (taskId, newTaskContent) => {
    let newTasks = {
      ...data.tasks,
      [taskId]: {
        ...data.tasks[taskId],
        content: newTaskContent,
      },
    }

    setData({
      ...data,
      tasks: newTasks,
    })
  }

  // Remove the task
  const deleteTask = (columnId, taskId) => {
    let newTasks = { ...data.tasks }
    delete newTasks[taskId]
    let newColumn = { ...data.columns[columnId] }
    newColumn.taskIds = newColumn.taskIds.filter(
      (oldTaskId) => oldTaskId !== taskId
    )

    setData({
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [columnId]: newColumn,
      },
    })
  }

  // Just to fix @mui <TextField> animation bug
  const [inputVal, setInputVal] = useState(""),
    inputOnChange = (e) => {
      setInputVal(e.target.value)
    }

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false),
    [dialogContent, setDialogContent] = useState({})

  // Close the dialog window
  const dialogOnClose = (e, reason, columnId, taskId) => {
    setDialogOpen(false)
    if (columnId && taskId) {
      deleteTask(columnId, taskId)
    }
  }

  // Confirm before task will be deleted
  const confirmTaskDeletion = (columnId, taskId) => {
    setDialogOpen(true)
    setDialogContent({
      title: "Task Deletion Confirmation",
      content: (
        <DialogContentText
          children={`Are you sure want to delete this task? This action cannot be undone.`}
        />
      ),
      actions: (
        <>
          <Button
            variant="contained"
            onClick={(e, reason) => dialogOnClose(e, reason, columnId, taskId)}
            children="Yeah, come on"
          />
          <Button onClick={dialogOnClose} children="No, I accidentally" />
        </>
      ),
    })
  }

  let matchesMobile = useMediaQuery(theme.breakpoints.down("lg"))
  console.log(matchesMobile, theme.breakpoints)

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="mainDroppable"
          type="COLUMN"
          direction={matchesMobile ? "vertical" : "horizontal"}
        >
          {(provided, snapshot) => (
            <Grid
              container
              spacing={2}
              className="columns"
              {...provided.draggableProps}
              ref={provided.innerRef}
              sx={{
                bgcolor: snapshot.isDraggingOver
                  ? theme.palette.mode === "dark"
                    ? grey[900]
                    : grey[300]
                  : "background.default",
              }}
            >
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns[columnId],
                  tasks = column.taskIds.map((taskId) => data.tasks[taskId])

                return (
                  <Column
                    key={column.id}
                    column={column}
                    index={index}
                    tasks={tasks}
                    editTask={editTask}
                    deleteTask={confirmTaskDeletion}
                    showSnackMessage={showSnackMessage}
                    theme={theme}
                  />
                )
              })}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
      <AddTaskForm
        addTask={addTask}
        inputVal={inputVal}
        inputOnChange={inputOnChange}
        theme={theme}
      />
      {/* dialogOpen && <Element />
        Ha-ha, LOL! Nope, man, that's wrong.
        You should render the dialog anyway even if it's not visible
        That's why you didn't see its animation when close it */}
      {
        <Dialog open={dialogOpen} onClose={dialogOnClose}>
          <DialogTitle children={dialogContent.title} />
          <DialogContent children={dialogContent.content} />
          <DialogActions children={dialogContent.actions} />
        </Dialog>
      }
    </>
  )
}

export default ToDo
