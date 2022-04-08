import { useState } from "react" 
import { DragDropContext } from "react-beautiful-dnd"
import Column from "./components/Column" 
import initialData from "./initialData" 

export default function App() {
  const [data, setData] = useState(initialData)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    // Dropped outside the list
    if(!destination) { return }
    // Dropped at the start position
    if(destination.droppableId === source.droppableId && destination.index === source.index) { return }

    const
      column = data.columns[source.droppableId],
      newTaskIds = Array.from(column.taskIds)
    
    // Remove the item at the old index...
    newTaskIds.splice(source.index, 1)
    // ...and insert with the new index
    newTaskIds.splice(destination.index, 0, draggableId)
    
    const newColumn = {...column, taskIds: newTaskIds}
    setData({...data, columns: {...data.columns, [newColumn.id]: newColumn}})
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
