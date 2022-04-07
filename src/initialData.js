const initialData = {
  tasks: {
    task1: {id: "task1", content: "Вынести мусор"},
    task2: {id: "task2", content: "Вынести Гамбит"},
    task3: {id: "task3", content: "Попробовать в работе MacBook"},
    task4: {id: "task4", content: "Do fucking magic"},
    task5: {id: "task5", content: "Make a wonderful application"},
    task6: {id: "task6", content: "Become a cool developer ;D"}
  },
  columns: {
    todo: {id: "todo", title: "To Do", taskIds: ["task1", "task2", "task3", "task4"]},
    doing: {id: "doing", title: "Doing", taskIds: ["task5", "task6"]}
  },
  columnOrder: ["todo", "doing"]
}

export default initialData
