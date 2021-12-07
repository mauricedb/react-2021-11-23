import { useAtom } from 'jotai';

import { RenderCount } from '../shared';
import { ToDoAtom } from './jotaiTodoStore';

interface Props {
  toDoAtom: ToDoAtom;
}

const ToDoItem = ({ toDoAtom: todoAtom }: Props) => {
  const [todo, setToDo] = useAtom(todoAtom);

  return (
    <li className="list-group-item">
      <RenderCount />
      <div className="input-group">
        <input
          className="todo-done form-check-input me-3"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => setToDo({ ...todo, isDone: !todo.isDone })}
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
