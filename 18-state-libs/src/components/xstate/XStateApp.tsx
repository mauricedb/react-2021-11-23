import { TodosContextProvider } from './TodosContextProvider';
import ToDoItems from './ToDoItems';

export default function XStateApp() {
  return (
    <TodosContextProvider>
      <ToDoItems />
    </TodosContextProvider>
  );
}
