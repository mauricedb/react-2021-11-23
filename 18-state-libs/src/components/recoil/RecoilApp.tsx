import { RecoilRoot } from 'recoil';
import ToDoItems from './ToDoItems';

export default function RecoilApp() {
  return (
    <RecoilRoot>
      <ToDoItems />
    </RecoilRoot>
  );
}
