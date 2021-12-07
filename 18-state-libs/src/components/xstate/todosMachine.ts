import { assign, createMachine } from 'xstate';
import { getInitialToDos } from '../../initialToDos';
import { Filter, ToDo } from '../../types';
import { filterToDos } from '../shared';

type TodosEvent =
  | { type: 'SHOW_ALL' }
  | { type: 'SHOW_ACTIVE' }
  | { type: 'SHOW_DONE' }
  | { type: 'ADD_TODO'; newTodo: ToDo }
  | { type: 'TOGGLE_DONE'; id: number };

type TodosContext = {
  allToDos: ToDo[];
  filteredToDos: ToDo[];
};

const allToDos = getInitialToDos();

export const todosMachine = createMachine<TodosContext, TodosEvent>(
  {
    id: 'todos',
    initial: 'all',
    context: {
      allToDos,
      filteredToDos: allToDos,
    },
    states: {
      all: {
        entry: assign({
          filteredToDos: (context) => filterToDos(context.allToDos, 'all'),
        }),
        on: {
          // State transitions in this state
          SHOW_DONE: 'done',
        },
      },
      active: {
        entry: assign({
          filteredToDos: (context) => filterToDos(context.allToDos, 'active'),
        }),
        on: {
          SHOW_DONE: 'done',
        },
      },
      done: {
        entry: assign({
          filteredToDos: (context) => filterToDos(context.allToDos, 'done'),
        }),
      },
    },
    on: {
      // Global state transitions
      SHOW_ALL: 'all',
      SHOW_ACTIVE: 'active',
      ADD_TODO: {
        actions: [
          assign({
            allToDos: (context, event) => [...context.allToDos, event.newTodo],
          }),
          'filterToDos',
        ],
      },
      TOGGLE_DONE: {
        actions: [
          assign({
            allToDos: (context, event) =>
              context.allToDos.map((todo) => {
                if (todo.id === event.id) {
                  return { ...todo, isDone: !todo.isDone };
                }
                return todo;
              }),
          }),
          'filterToDos',
        ],
      },
    },
  },
  {
    actions: {
      filterToDos: assign({
        filteredToDos: (context, event, meta) =>
          filterToDos(context.allToDos, (meta.state?.value ?? 'all') as Filter),
      }),
    },
  }
);
