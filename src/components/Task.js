import { Draggable } from "react-beautiful-dnd";

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          { task.content }
        </div>
      )}
    </Draggable>
  )
}
