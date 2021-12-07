import { ToDo, Filter } from '../../types';

export default function filterToDos(allToDos: ToDo[], filter: Filter): ToDo[] {
  switch (filter) {
    case 'all':
      return allToDos;
    case 'active':
      return allToDos.filter((todo) => !todo.isDone);
    case 'done':
      return allToDos.filter((todo) => todo.isDone);
    default:
      const exhaustiveCheck: never = filter;
      throw new Error(`Unexpected value ${exhaustiveCheck}`);
  }
}
