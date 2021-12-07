import { Filter, ToDo } from '../../types';
import { filterToDos } from '../shared';

interface AddToDoAction {
  type: 'ADD_TODO';
  payload: ToDo;
}

interface ToggleToDoAction {
  type: 'TOGGLE_TODO';
  payload: number;
}

interface SetFilterAction {
  type: 'SET_FILTER';
  payload: Filter;
}

export type ReducerAction = AddToDoAction | ToggleToDoAction | SetFilterAction;

interface State {
  allToDos: ToDo[];
  filteredToDos: ToDo[];
  currentFilter: Filter;
}

export function reducer(state: State, action: ReducerAction): State {
  switch (action.type) {
    case 'ADD_TODO': {
      const allToDos = [...state.allToDos, action.payload];
      const filteredToDos = filterToDos(allToDos, state.currentFilter);

      return { ...state, allToDos, filteredToDos };
    }
    case 'TOGGLE_TODO': {
      const allToDos = state.allToDos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
      const filteredToDos = filterToDos(allToDos, state.currentFilter);

      return {
        ...state,
        allToDos,
        filteredToDos,
      };
    }

    case 'SET_FILTER': {
      const filteredToDos = filterToDos(state.allToDos, action.payload);
      return {
        ...state,
        filteredToDos,
        currentFilter: action.payload,
      };
    }
    default: {
      const exhaustiveCheck: never = action;
      throw new Error(`Unexpected value ${JSON.stringify(exhaustiveCheck)}`);
    }
  }
}
