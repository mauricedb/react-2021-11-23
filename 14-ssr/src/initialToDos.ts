let id = Date.now();

export const getInitialToDos = (): ToDo[] => {
  return JSON.parse(
    JSON.stringify([
      { id: id++, text: 'Learn JavaScript', isDone: true },
      { id: id++, text: 'Learn TypeScript', isDone: true },
      { id: id++, text: 'Learn the React basics', isDone: true },
      {
        id: id++,
        text: 'Build applications with React and TypeScript',
        isDone: false,
      },
      { id: id++, text: 'Learn Redux', isDone: true },
      { id: id++, text: 'Learn MobX', isDone: false },
    ])
  );
};
