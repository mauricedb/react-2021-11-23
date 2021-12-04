interface Props {
  todo: ToDo;
  onToggleDone: (todo: ToDo) => void;
}

export function ToDoItem({ todo, onToggleDone }: Props) {
  return (
    <li className="list-group-item">
      <div className="input-group">
        <input
          className="todo-done form-check-input me-3"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggleDone(todo)}
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
}
