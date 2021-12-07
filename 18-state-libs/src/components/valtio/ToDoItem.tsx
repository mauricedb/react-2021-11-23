import type { ToDo } from '../../types';
import { RenderCount } from '../shared';
import { toggleDone } from './valtioTodoStore';

interface Props {
  todo: ToDo;
}

const ToDoItem = ({ todo }: Props) => {
  return (
    <li className="list-group-item">
      <RenderCount />
      <div className="input-group">
        <input
          className="todo-done form-check-input me-3"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleDone(todo)}
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
};

export default ToDoItem;
