import { ToDoFilterButton } from './ToDoFilterButton';

interface Props {
  currentFilter: Filter;
  setCurrentFilter: (filter: Filter) => void;
}

export function ToDoItemsFilter({
  currentFilter,
  setCurrentFilter: setFilterTo,
}: Props) {
  return (
    <ul id="filter" className="list-group mb-3">
      <li className="list-group-item">
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="all"
          setFilterTo={setFilterTo}
        >
          All
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="active"
          setFilterTo={setFilterTo}
        >
          Active
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="done"
          setFilterTo={setFilterTo}
        >
          Done
        </ToDoFilterButton>
      </li>
    </ul>
  );
}
