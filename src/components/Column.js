import { Draggable } from "react-beautiful-dnd"
import { Droppable } from "react-beautiful-dnd"
import Task from "./Task"

export default function Column({ column, index, tasks, deleteTask }) {
  return (
    <Draggable draggableId={column.id} index={index} type="COLUMN">
      {(provided) => <div
        className="column"
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <h2 {...provided.dragHandleProps}>{column.title}</h2>
        <Droppable droppableId={column.id} type="TASK">
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
      </div>}
    </Draggable>
  )
}
