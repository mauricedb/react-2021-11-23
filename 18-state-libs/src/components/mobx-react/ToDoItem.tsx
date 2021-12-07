import { observer } from 'mobx-react-lite';
import { autorun, action } from 'mobx';

import type { ToDo } from '../../types';
import { RenderCount } from '../shared';
import mobxTodoStore from './mobxTodoStore';

interface Props {
  todo: ToDo;
}

const ToDoItem = observer(({ todo }: Props) => {
  return (
    <li className="list-group-item">
      <RenderCount />
      <div className="input-group">
        <input
          className="todo-done form-check-input me-3"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => mobxTodoStore.onToggleDone(todo)}
        />
        <span
          className={
            'todo-text text-truncate' +
            (todo.isDone ? ' text-decoration-line-through' : '')
          }
          style={{ maxWidth: '95%' }}
        >
          {todo.text}
        </span>
      </div>
    </li>
  );
});

export default ToDoItem;
