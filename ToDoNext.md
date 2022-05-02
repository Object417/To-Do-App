### Header.js

- ~~Add `lottie-animated` logo~~
- ~~Add `icon-button` for mode toggle~~
- ~~Add `user-card` as a preview when hovering the link to the github~~
- Find normal logo
- Skeleton while loading the data in `UserCard.js`
- Normal header using `<AppBar>` and side menu
- Import/Export Tasks in `json` format

### App.js

- ~~Rename to the `ToDoList.js`~~
- ~~Some optimization and beautify the text (e.g. replace all styling with the `sx={{}}`)~~
- ~~Add `isEditable` state for each task so clicking at a task turns it into "editable mode". Clicking outside saves changes and turns this mode off~~
- ~~Show `delete-icon` only when hovering a task~~
- Use `react-dnd` provided snapshot to control styles while dragging
- Make the column's header sticky and add a scrollbar if there're lot of tasks
- Save tasks to the `localStorage`
- ~~Ограничить длину таска от 2х до 80 символов.~~
- ~~Сделать modal и snackbar отдельными компонентами~~ Не в этот раз
- Оптимизация для телефонов

### AddTaskForm.js

- ~~Make it beauty ;D~~

## Отказ от Lottie

Причины: несоответствие стилю, трудности в контролировании размеров и поведения

## Just notes

- Conditional render: `condition && <Component>`
