import { Provider } from 'react-redux';
import { store } from './reduxStore';
import ToDoItems from './ToDoItems';

export default function ReduxApp() {
  return (
    <Provider store={store}>
      <ToDoItems />
    </Provider>
  );
}
