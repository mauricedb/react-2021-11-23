interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
}

type Filter = 'all' | 'active' | 'done';
