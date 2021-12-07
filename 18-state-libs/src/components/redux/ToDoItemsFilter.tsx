import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../../types';
import { RenderCount, ToDoFilterButton } from '../shared';
import { AppDispatch, RootState } from './reduxStore';
import { setCurrentFilter } from './todosSlice';

const ToDoItemsFilter = () => {
  const filter = useSelector<RootState, Filter>((state) => state.currentFilter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ul id="filter" className="list-group mb-3">
      <li className="list-group-item">
        <RenderCount />
        <ToDoFilterButton
          currentFilter={filter}
          filter="all"
          setFilterTo={(filter) => dispatch(setCurrentFilter(filter))}
        >
          All
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={filter}
          filter="active"
          setFilterTo={(filter) => dispatch(setCurrentFilter(filter))}
        >
          Active
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={filter}
          filter="done"
          setFilterTo={(filter) => dispatch(setCurrentFilter(filter))}
        >
          Done
        </ToDoFilterButton>
      </li>
    </ul>
  );
};

export default ToDoItemsFilter;
