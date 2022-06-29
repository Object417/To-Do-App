# To Do App

## What can I do?

- Add new task
- Edit the task
- Delete the task
- Mark task as completed
- Reorder tasks in the column (drag-n-drop)
- Move tasks between columns (drag-n-drop or by selecting the column from drop-down list)

---

- Create new column
- Edit the column
- Delete the column (with all the tasks inside)
- Reorder columns horizontally

---

- Import/export tasks as `.json`
- Toggle app's theme (light/dark)

### Task labels

- Title
- Subtitle (description)
- Time (now or setted)
- Color (optional)
- completed (true/false)
- columnId
- id

### Column labels

- id
- Title
- tasksOrder (only ids)
- Color
- isCompletedHidden (true/false)

### Global store

- all tasks array
- all columns array
- columns order (only ids)

```json
{
  "tasks": {
    "task-1": {
      "id": "task-1",
      "columnId": "column-1",
      "title": "My first Task",
      "desc": "Additional info",
      "color": "#e6e6e6",
      "time": "11/10/2022",
      "completed": false
    }
  },
  "columns": {
    "column-1": {
      "id": "column-1",
      "title": "To Do",
      "taskOrder": ["task-1", "task-5", "task-3"]
    }
  },
  "columnOrder": ["column-2", "column-18", "column-4"]
}
```

Запись по типу: `{ [id]: { id: 12 } }` имеет свои преимущества перед обычным массивом: `[{ id: 12 }]`.
Это улучшает производительность, т.к. вместо перебирания всего массива методом `array.filter()`,
мы лишь достаём нужные объекты по ключам-id. По идее имеет, по логике, я не тестировал))
