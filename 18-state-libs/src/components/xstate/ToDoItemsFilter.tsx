import { useSelector } from '@xstate/react';
import { useContext } from 'react';

import { Filter } from '../../types';
import { RenderCount, ToDoFilterButton } from '../shared';
import { TodosContext } from './TodosContextProvider';

const ToDoItemsFilter = () => {
  const todosActor = useContext(TodosContext);
  const currentFilter = useSelector(
    todosActor,
    (state) => state.value as Filter
  );

  return (
    <ul id="filter" className="list-group mb-3">
      <li className="list-group-item">
        <RenderCount />
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="all"
          setFilterTo={() => todosActor.send('SHOW_ALL')}
        >
          All
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="active"
          setFilterTo={() => todosActor.send('SHOW_ACTIVE')}
        >
          Active
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="done"
          setFilterTo={() => todosActor.send('SHOW_DONE')}
        >
          Done
        </ToDoFilterButton>
      </li>
    </ul>
  );
};

export default ToDoItemsFilter;
