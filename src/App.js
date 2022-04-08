import { useState } from "react" 
import { DragDropContext } from "react-beautiful-dnd"
import Column from "./components/Column" 
import initialData from "./initialData" 

export default function App() {
  const [data, setData] = useState(initialData)

  const onDragEnd = result => {
    console.log(result)
    /* Okay, so in result we have:
      draggableId: id of the task that is dragged
      source: droppableId: column id from where task was taken
              index: index of the task
      destination: droppableId: column id where task was dropped
                   index: index where the task should be placed
    */

    const { destination, source, draggableId } = result

    // Dropped outside the list
    if(!destination) { return }
    // Dropped at the start position
    if(destination.droppableId === source.droppableId && destination.index === source.index) { return }

    // Reorder tasks in one column
    if(destination.droppableId === source.droppableId) {
      const
        column = data.columns[source.droppableId],
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
          [newColumn.id]: newColumn
        }
      })
    // Moving tasks between columns
    } else {
      const
        startColumn = data.columns[source.droppableId],
        endColumn = data.columns[destination.droppableId],
        newStartTaskIds = Array.from(startColumn.taskIds),
        newEndTaskIds = Array.from(endColumn.taskIds)

      newStartTaskIds.splice(source.index, 1)
      newEndTaskIds.splice(destination.index, 0, draggableId)

      const
        newStartColumn = {...startColumn, taskIds: newStartTaskIds},
        newEndColumn = {...endColumn, taskIds: newEndTaskIds}
      
      setData({
        ...data,
        columns: {
          ...data.columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn
        }
      })
    }
  }
  return (
    <main>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          data.columnOrder.map(columnId => {
            const
              column = data.columns[columnId],
              tasks = column.taskIds.map(taskId => data.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
          })
        }
      </DragDropContext>
    </main>
  )
}
