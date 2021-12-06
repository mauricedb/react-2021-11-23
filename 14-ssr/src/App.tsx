import 'bootstrap/dist/css/bootstrap.css';

import { ToDoItems } from './components/ToDoItems';

function App() {
  return (
    <div
      className={`container ${
        navigator.userAgent === 'ReactSnap' ? 'blur' : ''
      }`}
    >
      <ToDoItems />
    </div>
  );
}

export default App;
