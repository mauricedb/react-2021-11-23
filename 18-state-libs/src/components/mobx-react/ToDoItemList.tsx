import { observer } from 'mobx-react-lite';

import ToDoItem from './ToDoItem';
import mobxTodoStore from './mobxTodoStore';

const ToDoItemList = observer(() => (
  <ul id="todo-items" className="list-group">
    {mobxTodoStore.filteredToDos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} />
    ))}
  </ul>
));

export default ToDoItemList;
