import { useState } from "react";
import Column from "./components/Column";
import Header from "./components/Header";
import initialData from "./initialData";

export default function App() {
  const [data, setData] = useState(initialData)

  return (
    <main>
      {
        data.columnOrder.map(columnId => {
          const
            column = data.columns[columnId],
            tasks = column.taskIds.map(taskId => data.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })
      }
    </main>
  )
}
