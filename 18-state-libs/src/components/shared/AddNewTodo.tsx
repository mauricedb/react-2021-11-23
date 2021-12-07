import React, { useCallback, useState } from 'react';
import { ToDo } from '../../types';
import RenderCount from './RenderCount';

interface Props {
  addTodo: (newTodo: ToDo) => void;
}

function AddNewTodo({ addTodo }: Props) {
  const [newTodo, setNewToDo] = useState('');
  const addToDo = useCallback(() => {
    addTodo({
      id: Date.now(),
      text: newTodo,
      isDone: false,
    });
    setNewToDo('');
  }, [addTodo, newTodo]);

  return (
    <div className="position-relative">
      <RenderCount />
      <div className="input-group mb-3">
        <input
          id="new-todo"
          type="text"
          className="form-control shadow-none"
          placeholder="Add new..."
          aria-label="Recipient's username"
          aria-describedby="btn-add"
          value={newTodo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button
          id="btn-add"
          type="button"
          className="btn btn-outline-secondary pe-4 shadow-none"
          onClick={addToDo}
          disabled={!newTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddNewTodo;
