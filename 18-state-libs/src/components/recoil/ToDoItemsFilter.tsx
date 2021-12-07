import { useRecoilState } from 'recoil';

import { RenderCount, ToDoFilterButton } from '../shared';
import { filterState } from './atoms';

const ToDoItemsFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <ul id="filter" className="list-group mb-3">
      <li className="list-group-item">
        <RenderCount />
        <ToDoFilterButton
          currentFilter={filter}
          filter="all"
          setFilterTo={setFilter}
        >
          All
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={filter}
          filter="active"
          setFilterTo={setFilter}
        >
          Active
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={filter}
          filter="done"
          setFilterTo={setFilter}
        >
          Done
        </ToDoFilterButton>
      </li>
    </ul>
  );
};

export default ToDoItemsFilter;
