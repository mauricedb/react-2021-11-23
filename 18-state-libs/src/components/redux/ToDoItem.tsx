import { useDispatch } from 'react-redux';
import type { ToDo } from '../../types';
import { RenderCount } from '../shared';
import { AppDispatch } from './reduxStore';
import { onToggleDone } from './todosSlice';

interface Props {
  todo: ToDo;
}

const ToDoItem = ({ todo }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="list-group-item">
      <RenderCount />
      <div className="input-group">
        <input
          className="todo-done form-check-input me-3"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => dispatch(onToggleDone(todo.id))}
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
