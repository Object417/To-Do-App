import { Droppable } from "react-beautiful-dnd"
import Task from "./Task"

export default function Column({ column, tasks, deleteTask }) {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="tasksList"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            { tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} column={column} deleteTask={deleteTask} />
            )) }
            { provided.placeholder }
          </div>
        )}
      </Droppable>
    </div>
  )
}
