import { observer } from 'mobx-react-lite';
import { RenderCount, ToDoFilterButton } from '../shared';

import mobxTodoStore from './mobxTodoStore';

const ToDoItemsFilter = observer(() => {
  return (
    <ul id="filter" className="list-group mb-3">
      <li className="list-group-item">
        <RenderCount />
        <ToDoFilterButton
          currentFilter={mobxTodoStore.currentFilter}
          filter="all"
          setFilterTo={mobxTodoStore.setCurrentFilter}
        >
          All
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={mobxTodoStore.currentFilter}
          filter="active"
          setFilterTo={mobxTodoStore.setCurrentFilter}
        >
          Active
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={mobxTodoStore.currentFilter}
          filter="done"
          setFilterTo={mobxTodoStore.setCurrentFilter}
        >
          Done
        </ToDoFilterButton>
      </li>
    </ul>
  );
});

export default ToDoItemsFilter;
