import React, { ReactNode } from 'react';
import { InterpreterFrom } from 'xstate';
import { useInterpret } from '@xstate/react';

import { todosMachine } from './todosMachine';

export const TodosContext = React.createContext(
  {} as InterpreterFrom<typeof todosMachine>
);

type Props = { children: ReactNode };

export const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const todosService = useInterpret(todosMachine);

  return (
    <TodosContext.Provider value={todosService}>
      {children}
    </TodosContext.Provider>
  );
};
