import { RenderCount } from './RenderCount';

interface Props {
  todo: ToDo;
  onLabelToDo: (todo: ToDo, text: string) => void;
  onToggleDone: (todo: ToDo) => void;
}

export function ToDoItem({ todo, onLabelToDo, onToggleDone }: Props) {
  return (
    <li className="list-group-item">
      <RenderCount />
      <div className="input-group">
        <input
          className="todo-done form-check-input me-3"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggleDone(todo)}
        />
        {todo.isDone ? (
          <span
            className="text-truncate text-decoration-line-through"
            style={{ maxWidth: '95%' }}
          >
            {todo.text}
          </span>
        ) : (
          <input
            className="border-0"
            style={{ width: '95%' }}
            type="text"
            value={todo.text}
            onChange={(e) => onLabelToDo(todo, e.target.value)}
          />
        )}
      </div>
    </li>
  );
}
