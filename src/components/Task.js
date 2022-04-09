import { Draggable } from "react-beautiful-dnd"

export default function Task({ task, index, column, deleteTask }) {
  return (
    <Draggable draggableId={task.id} index={index} type={"TASK"}>
      {(provided) => (
        <div
          className="task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          { task.content }&nbsp;
          <button onClick={() => deleteTask(column.id, task.id)} children="[X]" />
        </div>
      )}
    </Draggable>
  )
}
