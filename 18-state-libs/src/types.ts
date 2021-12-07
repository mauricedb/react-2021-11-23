export interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
}

export type Filter = 'all' | 'active' | 'done';
