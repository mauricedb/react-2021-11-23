import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitialToDos } from '../../initialToDos';
import { Filter, ToDo } from '../../types';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    allToDos: getInitialToDos(),
    currentFilter: 'all' as Filter,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<ToDo>) => {
      state.allToDos.push(action.payload);
    },
    setCurrentFilter: (state, action: PayloadAction<Filter>) => {
      state.currentFilter = action.payload;
    },
    onToggleDone: (state, action: PayloadAction<number>) => {
      const todo = state.allToDos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { addTodo, onToggleDone, setCurrentFilter } = todosSlice.actions;

export default todosSlice.reducer;
