import 'bootstrap/dist/css/bootstrap.css';
import { CheckPrimeNumbers } from './components/CheckPrimeNumbers';

import { ToDoItems } from './components/ToDoItems';

function App() {
  return (
    <div className="container">
      <ToDoItems />
      {/* <CheckPrimeNumbers /> */}
    </div>
  );
}

export default App;
