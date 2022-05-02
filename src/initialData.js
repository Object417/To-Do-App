const initialData = {
  tasks: {
    task1: {
      id: "task1",
      content: "Создать свой шифратор и дешифратор для паролей",
    },
    task2: {
      id: "task2",
      content:
        "Создать своё приложение для заметок (прочитанные книги, пройденные игры и т.п.)",
    },
    task3: { id: "task3", content: "Попробовать в работе MacBook" },
    task4: { id: "task4", content: "Do fucking magic" },
    task5: { id: "task5", content: "Make a wonderful application" },
    task6: { id: "task6", content: "Become a cool developer ;D" },
    task7: { id: "task7", content: "Make this app looks great" },
  },
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      taskIds: ["task1", "task2", "task3"],
      bgColor: "error",
    },
    doing: {
      id: "doing",
      title: "In Progress",
      taskIds: ["task5", "task6"],
      bgColor: "warning",
    },
    done: {
      id: "done",
      title: "Done",
      taskIds: ["task7", "task4"],
      bgColor: "success",
    },
  },
  columnOrder: ["todo", "doing", "done"],
}

export default initialData
