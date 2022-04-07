import Task from "./Task";

export default function Column({ column, tasks }) {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      {
        tasks.map(task => <Task key={task.id} task={task} />)
      }
    </div>
  )
}
